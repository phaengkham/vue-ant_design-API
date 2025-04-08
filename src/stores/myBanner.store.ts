import { defineStore } from 'pinia';
import { reactive, ref, onMounted } from 'vue';
import myBannerService from '@/services/myBanner.service';
import type { IFormBanner } from '@/data-type/banner';

export const useMybannerStore = defineStore('myBannerStore', () => {

    const form = reactive<IFormBanner>({
        imageFile: null as File | null,
        imageURL: "",
        name: "",
        type: "normal",
        link: "",
        status: "active",
        id: undefined,
    });


    const current = ref(1);
    const pagination = reactive({
        current: current.value,
        pageSize: 10,
        total: 100,
    });


    const service = new myBannerService();

    const data = reactive({
        banners: [] as any[],
        isLoading: true,
    });


    const fetchAll = async (page: number = 1, perPage: number = 10) => {
        data.isLoading = true;
        try {
            const response = await service.getAll(page, perPage);
            if (response) {
                data.banners = response.data.data;
                pagination.total = response.data.total || 100;
                pagination.current = page;
                pagination.pageSize = perPage;
                console.log("Fetched banners:", data.banners);
                console.log("Pagination:", pagination);
            }
        } catch (error) {
            console.error("Error fetching banners:", error);
        } finally {
            data.isLoading = false;
        }
    };

    const fetOne = async (id: number) => {
        try {
            const response = await service.getOne(id);
            if (response && response.data && response.data.data) {
                const item = response.data.data;
                form.id = item.id;
                form.name = item.name;
                form.type = item.type;
                form.imageURL = item.image_url || "";
                console.log(`Fetched banner ID ${id}:`, item);
            } else {
                console.error("Invalid response format:", response);
            }
        } catch (error) {
            console.error(`Error fetching banner ID ${id}:`, error);
        }
    };


    onMounted(async () => {
        await fetchAll(pagination.current, pagination.pageSize);
    });


    const create = async () => {
        try {
            const response = await service.create(form);
            if (response) {
                clearForm();
            }
        } catch (error) {
            console.error("Error creating banner:", error);
        }
    };


    const update = async () => {
        try {
            const response = await service.update(form);
            if (response && response.data) {
                await fetchAll(pagination.current, pagination.pageSize);
                console.log(`Banner ID ${form.id} updated successfully`);
            } else {
                console.error(`Failed to update banner ID ${form.id}: No response data`);
            }
        } catch (error) {
            console.error(`Error updating banner ID ${form.id}:`, error);
        }
    };


    const deleteBanner = async (id: number) => {
        try {
            const response = await service.delete(id);
            if (response) {
                data.banners = data.banners.filter(banner => banner.id !== id);
                pagination.total -= 1;
                console.log(`Banner ID ${id} deleted successfully`);
                if (pagination.total <= pagination.pageSize * (pagination.current - 1)) {
                    pagination.current = Math.max(pagination.current - 1, 1);
                }
            }
        } catch (error) {
            console.error(`Error deleting banner ID ${id}:`, error);
        }
    };


    const clearForm = () => {
        form.name = "";
        form.type = "";
        form.imageFile = null;
        if (form.imageURL) {
            URL.revokeObjectURL(form.imageURL);
        }
        form.imageURL = "";
    };


    return {
        fetchAll,
        fetOne,
        data,
        form,
        pagination,
        create,
        update,
        deleteBanner,
        clearForm,
    };
});

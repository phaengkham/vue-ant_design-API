import { defineStore } from "pinia";
import { reactive } from "vue";
import SupplierService from "@/services/supplier.service";

export const useSupplierStore = defineStore("supplierStore", () => {
    const form = reactive({
        id: null,
        name: "",
        email: "",
        address: "",
        company: "",
        phone_number: "",
    });

    const data = reactive({
        suppliers: [] as any[],
        isLoading: true,
    });

    const service = new SupplierService();
    const fetchAll = async () => {
        try {
            data.isLoading = true;
            const response = await service.getAll();
            console.log("Suppliers fetch response:", response);
            console.log("Suppliers fetched data:", response.data.data);
            data.suppliers = Array.isArray(response.data.data) ? response.data.data : response.data ?? [];
            console.log("Suppliers data after assignment:", data.suppliers); // Verify the final data
        } catch (error) {
            console.error("Error fetching suppliers:", error);
        } finally {
            data.isLoading = false;
        }
    };
    const create = async () => {
        const response = await service.create(form);
        if (response) {
            await clearForm();
        }
    }
    const update = async (updatedSupplier: any) => {
        try {

            if (!updatedSupplier.id) {
                console.error('Update failed: Supplier ID is missing.');
                return false;
            }

            const response = await service.update(updatedSupplier);
            if (response) {
                clearForm();
                await fetchAll();
                return true;
            }
            return false;
        } catch (error) {
            console.error("Error updating supplier:", error);
            return false;
        }
    };
    const deleteSupplier = async (id: number) => {
        try {
            const response = await service.delete(id);
            console.log(response);
            await fetchAll();
        } catch (error) {
            console.error("Error deleting supplier:", error);
        }
    };
    const clearForm = () => {
        form.id = null;
        form.name = "";
        form.email = "";
        form.address = "";
        form.company = "";
        form.phone_number = "";
    };
    return {
        fetchAll,
        data,
        form,
        create,
        update,
        deleteSupplier,
        clearForm,
    };
});

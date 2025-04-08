import axios from "axios";
import { defineStore } from "pinia";
import { reactive } from "vue"
import BannerService from "@/services/banner.service";

export const useBannerStore = defineStore("bannerStore", () => {
    const data = reactive({
        banners: [] as { id: number; name: string }[],
        isLoading: true
    })

    const service = new BannerService()

    async function updatBanner(payload: any) {
        await axios({
            method: "put",
            url: "https://hal-test.hal-logistics.la/api/client/home-page/" +
                payload.value.id,
            data: {
                name: payload.value.id
            }
        })
            .then(function (response) {
                console.log("susccess")
            })
            .catch((error: any) => {
                console.log("error", error)
            })

    }
    const fetchAll = async () => {
        const response = await service.getAll()
        if (response) {
            data.banners = response.data.data.banner
            data.isLoading = false;
        }
    }

    const deleteItem = async (id: number) => {
        data.isLoading = true;
        const response = await service.delete(id);
        if (response) {
            await fetchAll();
        }
    }

    return {
        updatBanner, fetchAll, data, deleteItem
    }
})
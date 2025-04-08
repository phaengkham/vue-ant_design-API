import { AxiosApi } from "@/common/configuration/axios.config";
import type { AxiosResponse } from "axios";

export default class MyBannerService {
    private api: AxiosApi;
    constructor() {
        this.api = new AxiosApi();
    }

    async getAll(page: number = 1, perPage: number = 10): Promise<AxiosResponse> {
        try {
            const response = await this.api.axios.get(`admin/center-list-banners?per_page=${perPage}&page=${page}&q=`);
            return response.data;
        } catch (error) {
            throw new Error("Error fetching banners: " + error);
        }
    }

    async create(form: any): Promise<AxiosResponse> {
        try {
            const formData = new FormData();
            formData.append("image_file", form.imageFile);
            formData.append("name", form.name);
            formData.append("type", form.type);
            formData.append("link", form.link || "");

            const response = await this.api.axios.post("admin/center-add-banner", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            return response;
        } catch (error) {
            console.error("Error creating banner:", error);
            throw new Error("Error creating banner: " + error);
        }
    }

    async getOne(id: number): Promise<AxiosResponse> {
        try {
            const response = await this.api.axios.get(`admin/center-list-banners/${id}`);
            return response;
        }
        catch (error) {
            console.error(`Error fetching banner (ID: ${id}):`, error);
            throw new Error("Error fetching banner: " + error);
        }
    };

    async update(form: any): Promise<AxiosResponse> {
        try {
            const formData = new FormData();
            if (form.imageFile && form.imageFile instanceof File) {
                formData.append("image_file", form.imageFile);
            }
            formData.append("name", form.name);
            formData.append("type", form.type);
            formData.append("link", form.link || "");
            formData.append("status", form.status || "active");
            formData.append("_method", "PUT");

            const response = await this.api.axios.post(`admin/center-edit-banner/${form.id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response;
        } catch (error) {
            throw new Error("Error updating banner: " + error);
        }
    }



    async delete(id: number): Promise<AxiosResponse> {
        try {
            const response = await this.api.axios.delete(`admin/center-delete-banner/${id}`);
            return response;
        } catch (error) {
            console.error(`Error deleting banner (ID: ${id}):`, error);
            throw new Error("Error deleting banner: " + error);
        }
    }

}
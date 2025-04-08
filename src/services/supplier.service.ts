import { AxiosApi } from "@/common/configuration/axios.config";
import type { AxiosResponse } from "axios";

export default class SupplierService {
    private api: AxiosApi;

    constructor() {
        this.api = new AxiosApi();
    }

    async getAll(): Promise<AxiosResponse> {
        try {
            const response = await this.api.axios.get("admin/list-suppliers?per_page=15&page=1&q=");
            return response.data.data ?? [];
        } catch (error: any) {
            console.error("Error fetching suppliers:", error.response?.data?.message || error.message);
            throw new Error("Error fetching suppliers: " + (error.response?.data?.message || error.message));
        }
    }



    async create(form: any): Promise<any> {
        try {
            const response = await this.api.axios.post("admin/add-supplier", {
                name: form.name,
                email: form.email,
                company: form.company,
                address: form.address,
                phone_number: form.phone_number,
            });

            return response.data;
        } catch (error: any) {
            console.error("Error creating supplier:", error.response?.data?.message || error.message);
            throw new Error("Error creating supplier: " + (error.response?.data?.message || error.message));
        }
    }


    async update(supplier: any): Promise<AxiosResponse> {
        try {
            const response = await this.api.axios.put(`admin/edit-supplier/${supplier.id}`, supplier);
            return response.data;
        } catch (error) {
            console.error("Error updating supplier:", error);
            throw error;
        }
    }

    async delete(id: number): Promise<string> {
        try {
            if (!id) {
                throw new Error("Supplier ID is required for deletion.");
            }

            const response = await this.api.axios.delete(`admin/delete-supplier/${id}`);
            return response.data.message || "Supplier deleted successfully."; // ✅ Fix: Return success message
        } catch (error: any) {
            console.error("Error deleting supplier:", error.response?.data?.message || error.message);
            throw new Error("Error deleting supplier: " + (error.response?.data?.message || error.message));
        }
    }

}

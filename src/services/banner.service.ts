import { AxiosApi } from "@/common/configuration/axios.config";
import type { AxiosResponse } from "axios";

export default class BannerService {
    private api: AxiosApi;

    constructor() {
        this.api = new AxiosApi();
    }

    async getAll<T = any>(): Promise<AxiosResponse<T>> {
        try {
            const response = await this.api.axios.get<T>("client/home-page");
            return response;
        } catch (error) {
            console.error("Error fetching banner:", error);
            throw new Error(`Error fetching banner: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    async delete(id: number): Promise<AxiosResponse> {
        console.log("id:", id);
        try {
            const response = await this.api.axios.get("delete/banners/" + id)
            return response;
        } catch (error) {
            throw new Error("Error Delete Banner:" + error)
        }
    }
}

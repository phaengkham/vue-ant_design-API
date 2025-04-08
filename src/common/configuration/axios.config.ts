import type { AxiosInstance } from "axios";
import axios from "axios";

export class AxiosApi {
    public axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: import.meta.env.VITE_APP_BASE_API_URL,
            headers: {
                "Content-Type": "application/json",
            },
        });

        // ✅ Request Interceptor (Attach Token)
        this.axios.interceptors.request.use(
            async (config: any) => {
                const accessToken = localStorage.getItem("accessToken");

                if (accessToken) {
                    config.headers["Authorization"] = `Bearer ${accessToken}`; // ✅ Use "Bearer" with uppercase B
                }

                return config;
            },
            (error: any) => Promise.reject(error)
        );

        // ✅ Response Interceptor (Handle 401 Unauthorized)
        this.axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response?.status === 401) {
                    console.error("Unauthorized! Redirecting to login...");

                    localStorage.removeItem("accessToken"); // ✅ Remove invalid token
                    window.location.href = "/login"; // ✅ Redirect to login page

                    return Promise.reject("Unauthorized! Please log in again.");
                }
                return Promise.reject(error);
            }
        );
    }
}

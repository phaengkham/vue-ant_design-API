import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore("loginStore", () => {
    const router = useRouter(); // ✅ Ensure this is used correctly

    async function login(email: string, password: string) {
        try {
            const response = await axios.post("https://hal-test.hal-logistics.la/api/admin/sign-in", {
                email,
                password,
            });

            if (response.status === 200) {
                localStorage.setItem("accessToken", response.data.access_token);
                localStorage.setItem("user", JSON.stringify(response.data.authUser));

                console.log("Login successful, redirecting...");
                router.push("/admin"); // ✅ Ensure this works
            } else {
                throw new Error("Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    }

    return { login };
});

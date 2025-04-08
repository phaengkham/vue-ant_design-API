import type { Router } from "vue-router";

export function authGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        console.log(from);
        const token = localStorage.getItem("accessToken"); // Fixed typo in getItem

        if (to.meta.skipAuthCheck) {
            next();
        } else {
            if (token) {
                if (to.name === "login") {
                    next({ name: "test" });
                } else {
                    next();
                }
            } else {
                if (to.name !== "login") {
                    next({ name: "login" });
                } else {
                    next();
                }
            }
        }
    });
}

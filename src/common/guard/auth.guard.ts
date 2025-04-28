import type { Router, NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export function authGuard(router: Router) {
    router.beforeEach(
        async (
            to: RouteLocationNormalized,
            from: RouteLocationNormalized,
            next: NavigationGuardNext
        ) => {
            console.log("Navigating from:", from.fullPath);
            console.log("Navigating to:", to.fullPath);

            const token: string | null = localStorage.getItem("accessToken");

            if (to.meta.skipAuthCheck) {
                next();
                return;
            }

           
            if (token) {
                if (to.name === "login") {
                    next({ name: "showbanner" });
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
    );
}

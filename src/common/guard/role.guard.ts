export const hasRequiredRole = (
    userRoles: string[],
    requiredRoles: string[]
): boolean => {
    return requiredRoles.some((role: string) => userRoles.includes(role));
};

export const rolesGuard = (to: any, from: any, next: any): void => {
    console.log("rolesGuard", from);

    const userRolesString = localStorage.getItem("roles");
    const requiredRoles = to.meta.requiredRoles as string[];

    let userRoles: string[] = [];

    if (userRolesString !== null) {
        try {
            userRoles = JSON.parse(userRolesString);
        } catch (error) {
            console.error("Error parsing user roles:", error);
        }
    }

    if (hasRequiredRole(userRoles, requiredRoles)) {
        next();
    } else {
        next({ name: "mybanner" });
    }
};

import { router } from "./router.js";

export function clearStorage() {
    sessionStorage.clear();
    router("/login");
}

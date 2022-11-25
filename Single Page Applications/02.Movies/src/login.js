import { router } from "./router.js";

export async function getLogin(e) {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));

    const request = await fetch("http://localhost:3030/users/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    const user = await request.json();
    sessionStorage.setItem("accessToken", user.accessToken);
    sessionStorage.setItem("id", user._id);
    sessionStorage.setItem("email", user.email);
    router("/");
}

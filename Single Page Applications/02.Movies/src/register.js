import { router } from "./router.js";

export async function getRegister(e) {
    e.preventDefault();
    const { email, password, repeatPassword } = Object.fromEntries(new FormData(e.target));
    if (password != repeatPassword) {
        return false;
    }
    const request = await fetch("http://localhost:3030/users/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ email, password, repeatPassword }),
    });
    const user = await request.json();
    sessionStorage.setItem("accessToken", user.accessToken);
    sessionStorage.setItem("id", user._id);
    sessionStorage.setItem("email", user.email);

    router("/");
}

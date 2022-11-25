import { router } from "./router.js";

export async function addMovieForm(e) {
    e.preventDefault();
    const { title, description, img } = Object.fromEntries(new FormData(e.target));

    await fetch(`http://localhost:3030/data/movies`, {
        method: "POST",
        headers: { "content-type": "application/json", "X-Authorization": sessionStorage.getItem("accessToken") },
        body: JSON.stringify({ title, description, img }),
    });
    router("/");
}

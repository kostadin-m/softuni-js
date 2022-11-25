import { router } from "./router.js";

const editForm = document.querySelector("#edit-movie form");
export function editCurrent(e, id) {
    e.preventDefault();
    editForm.addEventListener("submit", async (ev) => {
        ev.preventDefault();
        const { title, description, img } = Object.fromEntries(new FormData(ev.target));

        await fetch(`http://localhost:3030/data/movies/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json", "X-Authorization": sessionStorage.getItem("accessToken") },
            body: JSON.stringify({ title, description, img }),
        });
        router("/");
    });
    router("/editMovie");
}

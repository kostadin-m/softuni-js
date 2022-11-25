import { renderHome, renderLogin, renderRegister, logout, renderAddMovie, renderNav, renderEditMovie } from "./views.js";
const welcomeElement = document.querySelector("#welcome-msg");

const routes = {
    "/": renderHome,
    "/login": renderLogin,
    "/register": renderRegister,
    "/logout": logout,
    "/addMovie": renderAddMovie,
    "/editMovie": renderEditMovie,
};

export function router(path) {
    renderNav();
    hideElements();

    const renderer = routes[path];
    renderer();
}

export function hideElements() {
    const user = sessionStorage.getItem("id") ? sessionStorage.getItem("email") : "user";
    welcomeElement.textContent = `Welcome, ${user}`;

    const [...elements] = document.getElementsByClassName("view-section");
    elements.forEach((el) => (el.style.display = "none"));
}

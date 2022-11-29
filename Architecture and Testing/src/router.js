import { login, logout, register, updateNav } from "./auth.js";
import { showCreateIdea } from "./pages/createIdea.js";
import { showDashBoard } from "./pages/dashBoard.js";
import { showHomePage } from "./pages/homePage.js";

const [...allElements] = document.querySelectorAll(".container.home");
allElements.push(document.querySelector("#dashboard-holder"));

const routes = {
    "/": showHomePage,
    "/login": login,
    "/register": register,
    "/logout": logout,
    "/dashboard": showDashBoard,
    "/createIdea": showCreateIdea,
};

export function router(path) {
    hideElements();
    updateNav();
    const renderer = routes[path];

    renderer();
}

export function hideElements() {
    allElements.forEach((el) => (el.style.display = "none"));
}

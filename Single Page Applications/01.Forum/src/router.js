import { renderHome, renderComments } from "./view.js";

const routes = {
    "/": renderHome,
    "/comments": renderComments,
};

export function router(path) {
    hideContent();

    const renderer = routes[path];

    renderer();
}

function hideContent() {
    const [...mainElements] = document.getElementsByClassName("container");

    mainElements.forEach((el) => (el.style.display = "none"));
}

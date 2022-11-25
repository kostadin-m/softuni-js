import { router } from "./router.js";
import { getPostsData } from "./posts.js";

const [...mainElements] = document.querySelectorAll(".container");
mainElements.forEach((el) => (el.style.display = "none"));

const homeButton = document.querySelector("nav > ul > li > a");
const formElement = document.querySelector("form");

formElement.addEventListener("submit", getPostsData);
homeButton.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.clear();
    if (e.target.tagName == "A") {
        let url = new URL(e.target.href);
        router(url.pathname);
    }
});

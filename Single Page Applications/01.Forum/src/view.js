import { getPosts } from "./posts.js";
import { loadComment } from "./comments.js";

const homePage = document.querySelector("#homepage");
const commentsPage = document.querySelector("#comments");

export function renderComments() {
    commentsPage.style.display = "block";
    loadComment();
}
export function renderHome() {
    getPosts();
    homePage.style.display = "block";
}

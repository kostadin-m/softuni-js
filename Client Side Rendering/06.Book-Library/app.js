import { render } from "../node_modules/lit-html/lit-html.js";
import { getAllBooks } from "./api.js";
import { booksTemplate } from "./books.js";
import { pageTemplate } from "./page.js";

const Bodyroot = document.querySelector("body");

loadPage();

const tbodyRoot = document.querySelector("tbody");
const loadBooksButton = document.querySelector("#loadBooks");

loadBooksButton.addEventListener("click", loadBooks);

function loadPage() {
    const page = pageTemplate();
    render(page, Bodyroot);
}

function loadBooks() {
    getAllBooks().then((data) => {
        const templateResult = booksTemplate(data);
        return render(templateResult, tbodyRoot);
    });
}
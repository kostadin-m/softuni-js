import { postBook, putBook } from "./api.js";

export function addBook(ev) {
    ev.preventDefault();
    const { author, title } = Object.fromEntries(new FormData(ev.target));

    return postBook({ author, title });
}

export function editBook(ev, bookTitle) {
    ev.preventDefault();
    const { author, title } = Object.fromEntries(new FormData(ev.target));

    putBook({ author, title }, bookTitle);
}
import { html } from "../node_modules/lit-html/lit-html.js";
import { deleteBook } from "./api.js";
import { editBook } from "./forms.js";

export const booksTemplate = (data) => html `
    ${data.map(
        (book) => html`<tr>
            <td id="title">${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button @click=${(e) => showEditForm(e)}>Edit</button>
                <button @click=${(e) => deleteBook(e)}>Delete</button>
            </td>
        </tr>`
    )}
`;

function showEditForm(e) {
    const title = e.target.parentNode.parentNode.children[0].textContent;
    const editForm = document.querySelector("#edit-form");
    editForm.style.display = "block";
    editForm.addEventListener("submit", function clicked(e) {
        editBook(e, title);
        return editForm.removeEventListener("submit", clicked);
    });
    document.querySelector("#add-form").style.display = "none";
}
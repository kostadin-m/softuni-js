import { html } from "lit-html";
import { addBook } from "./forms.js";

export const pageTemplate = () =>
    html `<button id="loadBooks">LOAD ALL BOOKS</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>

        <form id="add-form" @submit=${(e) => addBook(e)}>
            <h3>Add book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title..." />
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author..." />
            <input type="submit" value="Submit" />
        </form>

        <form id="edit-form" style="display: none" }>
            <input type="hidden" name="id" />
            <h3>Edit book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title..." />
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author..." />
            <input type="submit" value="Save" />
        </form> `;
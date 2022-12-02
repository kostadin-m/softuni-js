import { html, render } from "lit-html";

const url = `http://localhost:3030/jsonstore/advanced/dropdown`;
const rootElement = document.querySelector("body");

const template = (data) => html ` <h1>Dropdown Menu</h1>
    <article>
        <div>
            <select id="menu">
                ${data.map((x) => html`<option value=${x._id}>${x.text}</option>`)}
            </select>
        </div>
        <form @submit=${(ev) => submit(ev)}>
            <label for="itemText"> Text: </label>
            <input type="text" id="itemText" />
            <input type="submit" value="Add" />
        </form>
    </article>`;

loadPage();

function loadPage() {
    getDropdown().then((data) => {
        const templateResult = template(data, rootElement);
        render(templateResult, rootElement);
    });
}

async function getDropdown() {
    const request = await fetch(url);
    const res = await request.json();
    return Object.values(res);
}

async function submit(ev) {
    ev.preventDefault();
    const textElement = document.querySelector("#itemText");
    const text = textElement.value;
    await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ text }),
    });
    textElement.value = "";
    loadPage();
}
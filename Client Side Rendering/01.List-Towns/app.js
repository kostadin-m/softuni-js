import { html, render } from "../node_modules/lit-html/lit-html.js";

const rootElement = document.querySelector("#root");
const button = document.querySelector("#btnLoadTowns");
const textElement = document.querySelector("#towns");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const data = textElement.value;
    const templateResult = template(data.split(", "));

    render(templateResult, rootElement);
});

const template = (data) => html `
    <ul>
        ${data.map((town) => html`<li>${town}</li>`)}
    </ul>
`;
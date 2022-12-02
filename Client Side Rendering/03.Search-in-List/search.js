import { html, render } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const bodyElement = document.querySelector("body");

const search = document.querySelector("#searchText");

const townTemplate = (data, text) => html `
    <article>
        <div id="towns">
            <ul>
                ${data.map((town) => html`<li class="${checkItems(town, text) ? "active" : ""}}">${town}</li>`)}
            </ul>
        </div>
        <input type="text" id="searchText" />
        <button @click=${renderTowns(towns, search.value)}>Search</button>
        <div id="result">${getCount} number of matches</div>
    </article>
`;

function checkItems(town, input) {
    return input && town.toLowerCase().startsWith(input.toLowerCase());
}
function getCount(towns, input) {
    const count = towns.filter((town) => town.toLowerCase().startsWith(input.toLowerCase()));
    return count.length;
}
renderTowns(towns);

function renderTowns(towns, input = "") {
    const townResult = townTemplate(towns, input);
    render(townResult, bodyElement);
}
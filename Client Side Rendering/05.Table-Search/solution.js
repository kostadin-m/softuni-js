import { html, render } from "lit-html";

const url = `http://localhost:3030/jsonstore/advanced/table`;

const root = document.querySelector("tbody");
const input = document.querySelector("#searchField");

document.querySelector("#searchBtn").addEventListener("click", loadPage);

const template = (data, input) => html `
    ${data.map(
        (x) => html`<tr class=${checkMatches(x, input) ? "select" : ""}>
            <td>${x.firstName} ${x.lastName}</td>
            <td>${x.email}</td>
            <td>${x.course}</td>
        </tr>`
    )}
`;

function checkMatches(person, input) {
    return Object.values(person).some((value) => input && value.includes(input));
}

async function getNames() {
    const request = await fetch(url);
    const response = await request.json();
    return Object.values(response);
}

loadPage();

function loadPage() {
    getNames().then((data) => {
        const templateResult = template(data, input.value);
        render(templateResult, root);
    });
}
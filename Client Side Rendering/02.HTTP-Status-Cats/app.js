import { html, render } from "lit-html";
import cats from "./catSeeder.js";

const allCatsElement = document.querySelector("#allCats");

const template = (data) => html `
    <ul>
        ${data.map(
            (cat) => html` <li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap" />
                <div class="info">
                    <button class="showBtn" @click=${(e) => toggleView(e)}>Show status code</button>
                    <div class="status" style="display: none" id="100">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>`
        )}
    </ul>
`;

function toggleView(e) {
    const button = e.target;
    const status = e.target.nextElementSibling;
    status.style.display = status.style.display == "none" ? "block" : "none";
    button.textContent = "Show status code" ? "Hide status code" : "Show status code";
}

const templateResult = template(cats);
render(templateResult, allCatsElement);
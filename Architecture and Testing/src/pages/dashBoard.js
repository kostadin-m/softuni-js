import { getIdeas } from "../api.js";
import { showDetails } from "./IdeaDetails.js";

const dashBoard = document.querySelector("#dashboard-holder");
const emptyElement = document.querySelector("#dashboard-holder > h1");

export function showDashBoard() {
    dashBoard.innerHTML = "";
    if (checkForIdeas) {
        emptyElement.style.display = "none";
    } else {
        emptyElement.style.display = "inline";
    }
    dashBoard.style.display = "inline-block";
    getIdeas().then((data) => Object.values(data).forEach((idea) => idea));
}

function renderIdeas(idea) {
    const ideaElement = document.createElement("div");
    ideaElement.classList.add("card", "overflow-hidden", "current-card", "details");
    ideaElement.style = "width: 20rem; height: 18rem;";
    ideaElement.innerHTML = `
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">`;
    const detailsButton = document.createElement("a");
    detailsButton.id = idea._id;
    detailsButton.href = "";
    detailsButton.textContent = "Details";
    detailsButton.classList.add("btn");

    ideaElement.appendChild(detailsButton);
    dashBoard.appendChild(ideaElement);
    detailsButton.addEventListener("click", (e) => {
        e.preventDefault();
        showDetails(e.target.id);
    });
}

function checkForIdeas() {
    return dashBoard.hasChildNodes();
}

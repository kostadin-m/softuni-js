import { deleteCurrentIdea, getIdeaDetails } from "../api.js";
import { hideElements } from "../router.js";

const detailsElement = document.querySelector("#ideaDetails");
const detailsIMG = document.querySelector(".det-img");
const detailsTitle = document.querySelector(".display-5");
const detailsDescription = document.querySelector(".idea-description");
const deleteButton = document.querySelector(".btn.detb");

export function showDetails(ideaId) {
    hideElements();
    detailsElement.style.display = "block";
    return getIdeaDetails(ideaId).then((details) => renderDetails(details));
}

function renderDetails(details) {
    const currentUser = localStorage.getItem("userID");

    detailsIMG.src = details.img;
    detailsTitle.textContent = details.title;
    detailsDescription.textContent = details.description;
    deleteButton.style.display = currentUser != details._ownerId ? "none" : "inline";

    deleteButton.addEventListener("click", function clicked(e) {
        e.preventDefault();
        deleteButton.removeEventListener("click", clicked);
        deleteCurrentIdea(details._id);
    });
}

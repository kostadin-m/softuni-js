import { loadDetails } from "./details.js";
import { hideElements } from "./router.js";

const movieList = document.getElementsByClassName("card-deck f-flex justify-content")[0];
movieList.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (ev.target.tagName === "BUTTON") {
        hideElements();
        loadDetails(ev.target.parentNode.id);
    }
});

export async function getMovies() {
    while (movieList.hasChildNodes()) {
        movieList.removeChild(movieList.lastChild);
    }
    const request = await fetch("http://localhost:3030/data/movies");
    const data = await request.json();
    Object.values(data).forEach((movie) => renderMovies(movie));
}

function renderMovies(movie) {
    sessionStorage.removeItem("movieID");
    const div = document.createElement("div");
    div.className = "card mb-4";
    div.innerHTML = `
    <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
    <div class="card-body"<
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class ="card-footer">
        <a id="${movie._id}" href="/details">
            <button type="button" class="btn btn-info">Details</button>
        </a>
    </div>
    `;
    movieList.appendChild(div);
}

import { addMovieForm } from "./addMovie.js";
import { getMovies } from "./homePage.js";
import { clearStorage } from "./logout.js";

const editMovieElement = document.querySelector(`#edit-movie`);
const homeElement = document.querySelector("#home-page");
const loginElement = document.querySelector("#form-login");
const registerElement = document.querySelector("#form-sign-up");
const [...guestElements] = document.querySelectorAll(".nav-item-guest");
const userElement = document.querySelector(".nav-item-user");
const addMovieElement = document.querySelector("#add-movie");

export function renderNav() {
    if (sessionStorage.getItem("id")) {
        userElement.style.display = "block";
        guestElements.forEach((el) => (el.style.display = "none"));
    } else {
        guestElements.forEach((el) => (el.style.display = "block"));
        userElement.style.display = "none";
    }
}

export function renderHome() {
    homeElement.style.display = "block";
    getMovies();
}
export function renderLogin() {
    loginElement.style.display = "block";
}
export function renderRegister() {
    registerElement.style.display = "block";
}

export function logout() {
    clearStorage();
}
export function renderAddMovie() {
    addMovieElement.style.display = "block";
}
export function renderEditMovie() {
    editMovieElement.style.display = "block";
}

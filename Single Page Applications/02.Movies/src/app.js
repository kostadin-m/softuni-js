import { router } from "./router.js";
import { getLogin } from "./login.js";
import { getRegister } from "./register.js";
import { addMovieForm } from "./pages/addMovie.js";

const [...aElements] = document.querySelectorAll("nav a");
aElements.push(document.querySelector("#add-movie-button > a"));

const registerForm = document.querySelector("#register-form");
registerForm.addEventListener("submit", getRegister);

const loginForm = document.querySelector("#form-login");
loginForm.addEventListener("submit", getLogin);

const MovieForm = document.querySelector("#add-movie-form");
MovieForm.addEventListener("submit", addMovieForm);

aElements.forEach((el) => {
    el.addEventListener("click", (ev) => {
        ev.preventDefault();
        if (el.href) {
            const url = new URL(el.href);
            router(url.pathname);
        }
    });
});
router("/");

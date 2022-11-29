import { addIdea, Reqlogin, ReqRegister } from "./api.js";
import { getToken } from "./auth.js";
import { router } from "./router.js";

const [...aElements] = document.querySelectorAll("a:not(#delete)");
console.log(aElements);

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", Reqlogin);

const registerForm = document.querySelector("#register-form");
registerForm.addEventListener("submit", ReqRegister);

const createIdeaForm = document.querySelector("#createIdea-form");
createIdeaForm.addEventListener("submit", addIdea);

aElements.forEach((el) => {
    el.addEventListener("click", function click(ev) {
        ev.preventDefault();
        const url = new URL(el.href);

        if (el.textContent == "Get Started") {
            if (!getToken()) {
                url.pathname = "/login";
            }
        }
        router(url.pathname);
    });
});

router("/");

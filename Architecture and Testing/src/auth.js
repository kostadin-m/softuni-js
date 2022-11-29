import { ReqLogout } from "./api.js";

const [...userElement] = document.querySelectorAll("#user");
const [...guestElement] = document.querySelectorAll("#guest");
const loginElement = document.querySelector("#login-page");
const registerElement = document.querySelector("#register-page");

export function updateNav() {
    const token = localStorage.getItem("accessToken");
    hideAllNav();
    if (!token) {
        guestElement.forEach((el) => (el.style.display = "inline-block"));
    } else {
        userElement.forEach((el) => (el.style.display = "inline-block"));
    }
}
function hideAllNav() {
    userElement.forEach((el) => (el.style.display = "none"));
    guestElement.forEach((el) => (el.style.display = "none"));
}

export function login() {
    loginElement.style.display = "block";
}
export function register() {
    registerElement.style.display = "block";
}

export function logout() {
    ReqLogout();
}

export function getToken() {
    return localStorage.getItem("accessToken");
}

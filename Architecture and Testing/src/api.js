import * as req from "./requests.js";
import { router } from "./router.js";

const url = `http://localhost:3030/`;

const loginURL = `${url}users/login`;
const registerURL = `${url}users/register`;
const ideasURL = `${url}data/ideas`;
const sortedIdeasURL = `${url}data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`;

export function Reqlogin(ev) {
    ev.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(ev.target));
    try {
        req.post(loginURL, { email, password }).then((user) => {
            localStorage.setItem("accessToken", user.accessToken);
            localStorage.setItem("userID", user._id);
            router("/");
        });
    } catch (err) {
        console.log(err);
    }
}

export function ReqRegister(ev) {
    ev.preventDefault();
    const { email, password, repeatPassword } = Object.fromEntries(new FormData(ev.target));
    if (password != repeatPassword) {
        return alert("Passwords do not match!!");
    }
    try {
        req.post(registerURL, { email, password }).then((user) => {
            localStorage.setItem("accessToken", user.accessToken);
            router("/");
        });
    } catch (err) {
        console.log(err);
    }
}

export function ReqLogout() {
    localStorage.removeItem("accessToken");
    router("/");
}

export function addIdea(ev) {
    ev.preventDefault();
    const { title, description, imageURL } = Object.fromEntries(new FormData(ev.target));
    if (title.length < 6 || description.length < 10 || imageURL.length < 5) {
        return alert("Invalid Input");
    }
    try {
        req.post(ideasURL, { title, description, imageURL }, true).then((user) => router("/"));
    } catch (err) {
        console.log(err);
    }
}

export function getIdeas() {
    return req.get(sortedIdeasURL);
}

export function getIdeaDetails(id) {
    return req.get(`${ideasURL}/${id}`);
}

export function deleteCurrentIdea(id) {
    req.deletee(`${ideasURL}/${id}`, "", true).then((res) => router("/dashboard"));
    return router("/dashboard");
}

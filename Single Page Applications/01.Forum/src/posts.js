import { router } from "./router.js";
const containerElement = document.querySelector(".topic-container");

async function addPost(topicName, username, postText) {
    let date = new Date().toJSON();
    const year = date.slice(0, 10);
    const time = date.slice(11, date.length - 5);
    await fetch("http://localhost:3030/jsonstore/collections/myboard/posts", {
        method: "POST",
        headers: { "content-type": "application-json" },
        body: JSON.stringify({ topicName, username, postText, date: `${year}, ${time}` }),
    });
    router("/");
}

export function getPostsData(e) {
    e.preventDefault();
    const clickedButton = document.activeElement.textContent;
    const [...inputsElements] = document.querySelectorAll("form > div > input");
    const textAreaElement = document.querySelector("form > div >textarea");

    if (clickedButton === "Post") {
        const { topicName, username, postText } = Object.fromEntries(new FormData(e.target));
        addPost(topicName, username, postText);
    }
    textAreaElement.value = "";
    inputsElements.forEach((x) => (x.value = ""));
}

export async function getPosts() {
    containerElement.innerHTML = "";
    const request = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts");
    const data = await request.json();
    Object.values(data).forEach((x) => renderPosts(x));
}

function renderPosts(data) {
    const divElement = document.createElement("div");
    divElement.classList.add(`topic-name-wrapper`);
    divElement.innerHTML = `
        <div class="topic-name" id= "${data._id}">
            <a href="/comments" class="normal">
                <h2>${data.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${data.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${data.username}</span></p>
                    </div>
                </div>
            </div>
        </div>`;
    containerElement.appendChild(divElement);
    divElement.addEventListener("click", (ev) => {
        sessionStorage.setItem("id", data._id);
        ev.preventDefault();
        const hrefElement = ev.target.parentNode.tagName == "A" ? ev.target.parentNode : false;
        if (hrefElement) {
            let url = new URL(hrefElement.href);
            router(url.pathname);
        }
    });
}

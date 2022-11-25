import { router } from "./router.js";
const commentElement = document.querySelector(".comment");
const h2Element = document.querySelector(".theme-name h2");
const spanElement = document.querySelector(".header  p  span");
const timeElement = document.querySelector(".header  p  time");
const postTextElement = document.querySelector(".post-content");
const formElement = document.querySelector(".answer form");
const id = sessionStorage.getItem("id");

formElement.addEventListener("submit", getCommentsData);

async function addComment(username, postText) {
    const year = new Date().toJSON().slice(0, 10);
    const time = new Date().toJSON().slice(11, 19);
    const date = `${year}, ${time}`;
    await fetch("http://localhost:3030/jsonstore/collections/myboard/comments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, postText, postID: id, date }),
    });
    router("/comments");
}

export async function loadComment() {
    const request = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/` + id);
    const data = await request.json();
    renderPost(data);
}

function renderPost(data) {
    getPostsComments();
    h2Element.textContent = data.topicName;
    spanElement.textContent = data.username;
    timeElement.textContent = data.date;
    postTextElement.textContent = data.postText;
}

async function getCommentsData(ev) {
    ev.preventDefault();
    const [...inputsElements] = document.querySelectorAll("#username");
    const textAreaElement = document.querySelector("#comment");
    const { username, postText } = Object.fromEntries(new FormData(ev.currentTarget));

    textAreaElement.value = "";
    inputsElements.forEach((x) => (x.value = ""));
    addComment(username, postText);
}

function renderComments(data) {
    while (commentElement.children.length > 1) {
        commentElement.removeChild(commentElement.lastChild);
    }
    data.forEach((comment) => {
        const divElement = document.createElement("div");
        divElement.classList.add("user-comment");
        divElement.innerHTML = `
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${comment.username}</strong> commented on <time>${comment.date}</time></p>
                <div class="post-content">
                    <p>${comment.postText}</p>
                </div>
            </div>
        </div>`;
        commentElement.appendChild(divElement);
    });
}

async function getPostsComments() {
    let validComments = [];
    const request = await fetch("http://localhost:3030/jsonstore/collections/myboard/comments");
    const data = await request.json();
    for (let key of Object.keys(data)) {
        if (data[key].postID === id) {
            validComments.push(data[key]);
        }
    }
    renderComments(validComments);
}

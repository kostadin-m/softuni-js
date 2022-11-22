function attachEvents() {
    let loadButtonElement = document.querySelector("#btnLoadPosts");
    let selectElement = document.querySelector("#posts");
    let viewButtonElement = document.querySelector("#btnViewPost");
    let postCommentsEl = document.querySelector("#post-comments");
    let postBodyElement = document.querySelector("#post-body");
    let TitleElement = document.querySelector("#post-title");

    let postsJson = "";

    loadButtonElement.addEventListener("click", getPosts);

    async function getPosts(event) {
        const postsResponse = await fetch(`http://localhost:3030/jsonstore/blog/posts`);
        const parsedResponse = await postsResponse.json();

        postsJson = parsedResponse;

        Object.keys(postsJson).forEach((key) => {
            let optionElement = document.createElement("option");
            optionElement.setAttribute("value", key);
            optionElement.textContent = postsJson[key].title;
            selectElement.appendChild(optionElement);
            event.target.disabled = true;
            viewButtonElement.addEventListener("click", viewPosts);
        });
    }
    async function viewPosts() {
        const PostID = selectElement.value;

        postBodyElement.innerHTML = "";
        postCommentsEl.innerHTML = "";
        TitleElement.textContent = postsJson[PostID].title;
        postBodyElement.textContent = postsJson[PostID].body;

        const url = `http://localhost:3030/jsonstore/blog/comments`;
        const postsResponse = await fetch(url);
        const commentsResponse = await postsResponse.json();

        Object.keys(commentsResponse).forEach((key) => {
            let postKey = commentsResponse[key].postId;
            const comment = commentsResponse[key].text;
            if (PostID == postKey) {
                let liElement = document.createElement("li");
                liElement.textContent = comment;
                postCommentsEl.appendChild(liElement);
            }
        });
    }
}
attachEvents();

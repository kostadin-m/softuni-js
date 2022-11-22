(function () {
    const formElement = document.querySelector("form");
    const userElement = document.querySelector("#user");
    const guestElement = document.querySelector("#guest");
    const spanElement = document.querySelector("span");
    const logoutButton = document.querySelector("#logout");
    const addButton = document.querySelector(".add");
    const loadButton = document.querySelector(".load");

    const currentUser = localStorage.getItem("email");
    const token = localStorage.getItem("accessToken");

    loadButton.addEventListener("click", loadCatches);
    addButton.addEventListener("click", () => formElement.addEventListener("submit", addCatch));
    logoutButton.addEventListener("click", () => {
        location.reload();
        localStorage.clear();
    });
    userElement.style.display = !token ? "none" : "inline-block";
    spanElement.textContent = currentUser ? currentUser : "guest";

    if (token) {
        addButton.disabled = false;
        guestElement.style.display = "none";
    }
})();

async function loadCatches() {
    const userData = await fetch(`http://localhost:3030/users/me`, {
        headers: { "X-Authorization": localStorage.getItem("accessToken") },
    });
    const userDataa = await userData.json();
    const userID = userDataa._id;

    const catches = document.querySelector("#catches");

    const request = await fetch("http://localhost:3030/data/catches");
    const data = await request.json();
    Object.values(data).forEach((catchData) => {
        const divElement = document.createElement("div");
        divElement.classList.add("catch");
        divElement.innerHTML = `
            <label>Angler</label>
                <input type="text" class="angler" value="${catchData.angler}">
            <label>Weight</label>
                <input type="text" class="weight" value="${catchData.weight}">
            <label>Species</label>
                <input type="text" class="species" value="${catchData.species}">
            <label>Location</label>
                <input type="text" class="location" value="${catchData.location}">
            <label>Bait</label>
                <input type="text" class="bait" value="${catchData.bait}">
            <label>Capture Time</label>
                <input type="number" class="captureTime" value="${catchData.captureTime}">
        `;
        const Update = document.createElement("button");
        Update.setAttribute("class", "update");
        Update.setAttribute("id", catchData._id);
        Update.textContent = "Update";
        const Delete = document.createElement("button");
        Delete.setAttribute("class", "delete");
        Delete.setAttribute("id", catchData._id);
        Delete.textContent = "Delete";
        divElement.appendChild(Update);
        divElement.appendChild(Delete);
        if (userID !== catchData._ownerId) {
            Update.disabled = true;
            Delete.disabled = true;
        }
        Update.addEventListener("click", updateCatch);
        Delete.addEventListener("click", DeleteCatch);
        catches.appendChild(divElement);
    });
}

async function addCatch(ev) {
    const token = localStorage.getItem("accessToken");
    const form = ev.currentTarget;
    const { angler, weight, species, location, bait, captureTime } = Object.fromEntries(new FormData(form));
    await fetch("http://localhost:3030/data/catches", {
        method: "POST",
        headers: { "content-type": "application/json", "X-Authorization": token },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime }),
    });
}

async function updateCatch(ev) {
    const currentID = ev.currentTarget.id;
    const currentCatchEl = ev.currentTarget.parentNode;
    const angler = currentCatchEl.children[1].value;
    const weight = currentCatchEl.children[3].value;
    const species = currentCatchEl.children[5].value;
    const location = currentCatchEl.children[7].value;
    const bait = currentCatchEl.children[9].value;
    const captureTime = currentCatchEl.children[11].value;

    await fetch("http://localhost:3030/data/catches/" + currentID, {
        method: "PUT",
        headers: { "content-type": "application/json", "X-Authorization": localStorage.getItem("accessToken") },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime }),
    });
    location.reload();
}

async function DeleteCatch(ev) {
    const currentID = ev.currentTarget.id;
    await fetch("http://localhost:3030/data/catches/" + currentID, {
        method: "DELETE",
        headers: { "content-type": "application/json", "X-Authorization": localStorage.getItem("accessToken") },
    });
    location.reload();
}

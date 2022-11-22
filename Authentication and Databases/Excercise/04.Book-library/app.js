(function () {
    const formElement = document.querySelector("form");
    formElement.addEventListener("submit", addBook);
    const loadBooksButton = document.querySelector("#loadBooks");
    loadBooksButton.addEventListener("click", loadBooks);
})();

async function loadBooks() {
    const request = await fetch("http://localhost:3030/jsonstore/collections/books");
    const data = await request.json();
    Object.keys(data).forEach((book) => renderBooks(data, book));
}

function renderBooks(data, book) {
    const currentBook = data[book];
    const tableElement = document.querySelector("tbody");
    const trElement = document.createElement("tr");
    trElement.id = book;

    const tdElement = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    tdElement.appendChild(editButton);
    tdElement.appendChild(deleteButton);

    editButton.addEventListener("click", editBook);
    deleteButton.addEventListener("click", deleteBook);

    trElement.innerHTML = `
                <td>${currentBook.title}</td>
                <td>${currentBook.author}</td>`;
    trElement.appendChild(tdElement);
    tableElement.appendChild(trElement);
}

async function addBook(ev) {
    const form = ev.currentTarget;
    const { author, title } = Object.fromEntries(new FormData(form));
    await fetch("http://localhost:3030/jsonstore/collections/books", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ author, title }),
    });
}

async function editBook(ev) {
    const formElement = document.querySelector("form");
    const h3Element = document.querySelector("form > h3");
    h3Element.textContent = `Edit Form`;
    const currentID = ev.currentTarget.parentNode.parentNode.id;

    formElement.removeEventListener("submit", addBook);
    formElement.addEventListener("submit", async (ev) => {
        const form = ev.currentTarget;
        const { author, title } = Object.fromEntries(new FormData(form));
        await fetch(`http://localhost:3030/jsonstore/collections/books/${currentID}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ author, title }),
        });
    });
}

async function deleteBook(ev) {
    const currentID = ev.currentTarget.parentNode.parentNode.id;
    await fetch(`http://localhost:3030/jsonstore/collections/books/${currentID}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
    });
    location.reload();
}

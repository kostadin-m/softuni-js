function attachEvents() {
    const loadButton = document.querySelector("#btnLoad");
    const createButton = document.querySelector("#btnCreate");

    createButton.addEventListener("click", addtoPhoneBook);
    loadButton.addEventListener("click", renderPhoneBooks);
}

async function renderPhoneBooks() {
    const getPhonebooks = await fetch("http://localhost:3030/jsonstore/phonebook");
    const data = await getPhonebooks.json();
    Object.values(data).forEach((phonebook) => createPhoneBook(phonebook));
}

async function deletePhoneBook(ev) {
    const currentID = ev.currentTarget.parentNode.id;
    await fetch(`http://localhost:3030/jsonstore/phonebook/${currentID}`, { method: "DELETE" });
    location.reload();
}

async function addtoPhoneBook() {
    const person = document.querySelector("#person");
    const phone = document.querySelector("#phone");

    await fetch("http://localhost:3030/jsonstore/phonebook", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ person: person.value, phone: phone.value }),
    });
    location.reload();
}

function createPhoneBook(book) {
    const phonebooksElement = document.querySelector("#phonebook");
    const liElement = document.createElement("li");
    liElement.setAttribute("id", book._id);
    liElement.textContent = `${book.person}: ${book.phone}`;

    const buttonElement = document.createElement("button");
    liElement.appendChild(buttonElement);
    buttonElement.textContent = "Delete";
    buttonElement.addEventListener("click", deletePhoneBook);

    phonebooksElement.appendChild(liElement);
}
attachEvents();

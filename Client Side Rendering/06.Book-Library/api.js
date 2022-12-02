const url = `http://localhost:3030/jsonstore/collections/books`;

export function getAllBooks() {
    return fetch(url)
        .then((data) => data.json())
        .then((data) => Object.values(data));
}

export function deleteBook(ev) {
    const title = ev.target.parentNode.parentNode.children[0].textContent;
    getBookid(title).then((id) =>
        fetch(`${url}/${id}`, {
            method: "DELETE",
        })
    );
}

async function getBookid(title) {
    const request = await fetch(url);
    const data = await request.json();

    const bookID = Object.keys(data).filter((key) => data[key].title === title)[0];
    return bookID;
}

export async function postBook(data) {
    return await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    });
}

export async function putBook(data, title) {
    getBookid(title).then((id) => {
        fetch(`${url}/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        });
    });
}
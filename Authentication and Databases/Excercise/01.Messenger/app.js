function attachEvents() {
    const textarea = document.querySelector("#messages");
    const addButtonElement = document.querySelector("#submit");
    const refreshButtonElement = document.querySelector("#refresh");

    refreshButtonElement.addEventListener("click", () => location.reload());
    addButtonElement.addEventListener("click", sendMessages);

    return renderMessages();

    async function renderMessages() {
        const result = await fetch(`http://localhost:3030/jsonstore/messenger`);
        const data = await result.json();
        Object.values(data).forEach((x) => {
            textarea.textContent += `${x.author}: ${x.content}\n`;
        });
    }
}

async function sendMessages() {
    const author = document.querySelector('input[name="author"]');
    const content = document.querySelector('input[name="content"]');

    await fetch(`http://localhost:3030/jsonstore/messenger`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ author: author.value, content: content.value }),
    });
    author.value = "";
    content.value = "";
}

attachEvents();

function solve() {
    let name = document.querySelectorAll("#container > input")[0];
    let hall = document.querySelectorAll("#container > input")[1];
    let ticketPrice = document.querySelectorAll("#container > input")[2];

    let moviesSection = document.querySelector("#movies > ul");
    let archiveSection = document.querySelector("#archive > ul");

    let clearButton = document.querySelector("#archive > button");
    let buttonElement = document.querySelector("#container > button");

    function createElement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;
        if (className) {
            result.className = className;
        }
        return result;
    }
    clearButton.addEventListener("click", (e) => {
        let allLiElements = document.querySelectorAll("#archive > ul >li");
        Array.from(allLiElements).forEach((x) => x.remove());
    });

    buttonElement.addEventListener("click", (e) => {
        e.preventDefault();
        if (
            name.value.length === 0 ||
            hall.value.length === 0 ||
            ticketPrice.value.length == 0 ||
            isNaN(ticketPrice.value)
        ) {
            return;
        }
        let liElement = createElement("li");
        let spanElement = createElement("span", name.value);
        let strongElement = createElement("strong", `Hall: ${hall.value}`);
        let divElement = createElement("div");
        let secondStrongElement = createElement("strong", Number(ticketPrice.value).toFixed(2));
        let inputElement = createElement("input");
        inputElement.placeholder = "Tickets Sold";
        let buttonElement = createElement("button", "Archive");

        liElement.appendChild(spanElement);
        liElement.appendChild(strongElement);

        divElement.appendChild(secondStrongElement);
        divElement.appendChild(inputElement);
        divElement.appendChild(buttonElement);

        liElement.appendChild(divElement);
        moviesSection.appendChild(liElement);

        name.value = "";
        hall.value = "";
        ticketPrice.value = "";

        buttonElement.addEventListener("click", (e) => {
            if (isNaN(inputElement.value) || inputElement.value.length === 0) {
                return;
            }
            divElement.remove();
            strongElement.remove();
            let totalSales = Number(secondStrongElement.textContent) * Number(inputElement.value);
            let deleteButton = createElement("button", "Delete");
            secondStrongElement.textContent = `Total amount: ${totalSales.toFixed(2)}`;

            liElement.appendChild(secondStrongElement);
            liElement.appendChild(deleteButton);

            archiveSection.appendChild(liElement);

            deleteButton.addEventListener("click", (e) => {
                liElement.remove();
            });
        });
    });
}

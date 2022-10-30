function solve() {
    let GenerateTextArea = document.querySelector("#exercise > textarea");
    let generateButton = GenerateTextArea.nextElementSibling;
    let tableElement = document.querySelector(".table > tbody");
    let buyButtonElement = document.querySelector("#exercise > button:nth-of-type(2)");
    let resultTextAreaElement = buyButtonElement.previousElementSibling;

    generateButton.addEventListener("click", addItemsToRow);
    function addItemsToRow() {
        let Furniture = JSON.parse(GenerateTextArea.value).forEach((items) => {
            tableElement.innerHTML += `<tr>
            <td><img src=${items.img}></td>
            <td><p>${items.name}</p></td>
            <td><p>${items.price}</p></td>
            <td><p>${items.decFactor}</p></td>
            <td><input type="checkbox"/></td>
            </tr>`;
        });
    }
    buyButtonElement.addEventListener("click", buyElements);
    function buyElements() {
        let arrayOfBoughtProducts = [];
        let totalPrice = 0;
        let DecFactor = 0;
        [...document.querySelectorAll("input:checked")].forEach((element) => {
            let trElement = element.parentNode.parentNode;
            let name = trElement.querySelector("td:nth-child(2) > p").textContent;
            arrayOfBoughtProducts.push(name);
            totalPrice += Number(trElement.querySelector("td:nth-child(3) > p").textContent);
            DecFactor += Number(trElement.querySelector("td:nth-child(4) > p").textContent);
        });
        resultTextAreaElement.value +=
            `Bought furniture: ${arrayOfBoughtProducts.join(", ")}. \n` +
            `Total price: ${totalPrice.toFixed(2)}\n` +
            `Average Decoration Factor: ${DecFactor / arrayOfBoughtProducts.length}`;
    }
}

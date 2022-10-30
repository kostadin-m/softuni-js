function addItem() {
    let resultElement = document.querySelector("#menu");
    let textElement = document.querySelector("#newItemText");
    let valueElement = document.querySelector("#newItemValue");
    let optionElement = document.createElement("option");

    optionElement.textContent = textElement.value;
    optionElement.value = valueElement.value;
    textElement.value = "";
    valueElement.value = "";

    resultElement.appendChild(optionElement);
}

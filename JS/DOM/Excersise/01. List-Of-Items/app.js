function addItem() {
  let inputElement = document.querySelector("#newItemText");
  let itemsElement = document.querySelector("#items");
  itemsElement.innerHTML += `<li>${inputElement.value}</li>`;
}

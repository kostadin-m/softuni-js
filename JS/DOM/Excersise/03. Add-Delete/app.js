function addItem() {
  let listElement = document.querySelector("#items");
  let inputElement = document.querySelector("#newItemText");
  let liELement = document.createElement("li");

  deleteElement = document.createElement("a");
  deleteElement.href = "#";
  deleteElement.textContent = "[Delete]";
  deleteElement.addEventListener("click", (e) => {
    let currentEle = e.currentTarget.parentElement;
    currentEle.remove();
  });

  liELement.textContent = inputElement.value;
  liELement.appendChild(deleteElement);
  listElement.appendChild(liELement);
}

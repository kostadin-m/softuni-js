function solve() {
  let addButtonElements = document.querySelectorAll("button");
  let textAreaElement = document.querySelector("textarea");
  let setOfItems = new Set();
  let sum = 0;

  Array.from(addButtonElements).forEach((x) => {
    if (x.className == "checkout") {
      x.addEventListener("click", checkoutItems);
    } else {
      x.addEventListener("click", addToTextArea);
    }
  });

  function addToTextArea(element) {
    const productElement = element.target.parentNode;
    const Price = productElement.nextElementSibling.textContent;
    const Title = productElement.previousElementSibling.children[0].textContent;

    textAreaElement.textContent += `Added ${Title} for ${Number(Price).toFixed(
      2
    )} to the cart.\n`;

    setOfItems.add(Title);
    sum += Number(Price);
  }

  function checkoutItems(e) {
    items = Array.from(setOfItems).join(", ");
    textAreaElement.textContent += `You bought ${items} for ${sum.toFixed(2)}.`;
    Array.from(document.getElementsByTagName("button")).forEach(
      (button) => (button.disabled = true)
    );
  }
}

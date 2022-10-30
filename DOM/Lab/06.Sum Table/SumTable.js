function sumTable() {
  let pricesElements = document.querySelectorAll("td:nth-of-type(2n)");
  let sum = 0;
  for (let i = 0; i < pricesElements.length - 1; i++) {
    sum += Number(pricesElements[i].textContent);
  }
  let resultElement = document.querySelector("#sum");
  resultElement.textContent = sum;
}

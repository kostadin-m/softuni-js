function create(words) {
  let resultElement = document.querySelector("#content");

  words.forEach((x) => {
    let divElement = document.createElement("div");
    let pElement = document.createElement("p");

    pElement.style.display = "none";
    pElement.textContent = x;

    divElement.appendChild(pElement);

    divElement.addEventListener("click", (e) => {
      let textElement = e.target.children[0];
      textElement.style.display = "inline";
    });
    resultElement.appendChild(divElement);
  });
}

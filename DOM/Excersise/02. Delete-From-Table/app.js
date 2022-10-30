function deleteByEmail() {
  let emailsElement = document.querySelectorAll("tr td:nth-of-type(2n)");
  const inputEmail = document.querySelector("label input");
  let resultElement = document.querySelector("#result");

  let targetElement = Array.from(emailsElement).find(
    (x) => x.textContent == inputEmail.value
  );

  if (targetElement) {
    targetElement.parentNode.remove();
    resultElement.textContent = "Deleted.";
  } else {
    resultElement.textContent = "Not found.";
  }
}

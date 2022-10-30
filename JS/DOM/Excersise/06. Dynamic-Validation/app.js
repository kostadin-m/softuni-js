function validate() {
  let emailfilter =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailElement = document.querySelector("input");
  let email = emailElement.value;
  let found = emailElement.addEventListener("change", changeEmail);
  function changeEmail(e) {
    if (!emailfilter.test(e.target.value)) {
      emailElement.classList.add("error");
      return;
    }
    emailElement.classList.remove("error");
  }
}

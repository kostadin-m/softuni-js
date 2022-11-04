function validate() {
    let inputElement = document.querySelector("#email");
    const EmailValidator =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    inputElement.addEventListener("change", (e) => {
        let currentInput = e.currentTarget.value;
        if (!currentInput.match(EmailValidator)) {
            return inputElement.classList.add("error");
        }
        return inputElement.classList.remove("error");
    });
}

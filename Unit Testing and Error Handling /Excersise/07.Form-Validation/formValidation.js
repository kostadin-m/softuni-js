function validate() {
    let UsernameElement = document.querySelector("#username");
    let emailElement = document.querySelector("#email");
    let passwordElement = document.querySelector("#password");
    let confirmPasswordElement = document.querySelector("#confirm-password");
    let companyCheckboxElement = document.querySelector("#company");
    let hiddenCompany = document.querySelector("#companyInfo");
    let submitButtonElement = document.querySelector("#submit");
    let numberElement = document.querySelector("#companyNumber");
    let validElement = document.querySelector("#valid");

    companyCheckboxElement.addEventListener("change", (e) => {
        if (e.currentTarget.checked) {
            return (hiddenCompany.style.display = "inline");
        }
        return (hiddenCompany.style.display = "none");
    });

    const usernamePattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const passwordPattern = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/;
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;

    submitButtonElement.addEventListener("click", (e) => {
        let isValid = true;
        let currentUsername = UsernameElement.value;
        e.preventDefault();
        if (usernamePattern.test(currentUsername) || currentUsername.length < 3 || currentUsername.length > 20) {
            UsernameElement.style.borderColor = "red";
            isValid = false;
        } else {
            UsernameElement.style.borderColor = "none";
        }
        let currentEmail = emailElement.value;
        if (!emailPattern.exec(currentEmail)) {
            emailElement.style.borderColor = "red";
            isValid = false;
        } else {
            emailElement.style.borderColor = "";
        }

        let currentPassword = passwordElement.value;
        let currentConfirmPassword = confirmPasswordElement.value;
        if (
            (currentPassword === currentConfirmPassword) &
            !passwordPattern.test(currentPassword) &
            (currentPassword.length >= 5) &
            (currentPassword.length <= 15) &
            !passwordPattern.test(currentConfirmPassword)
        ) {
            passwordElement.style.borderColor = "";
            confirmPasswordElement.style.borderColor = "";
        } else {
            passwordElement.style.borderColor = "red";
            confirmPasswordElement.style.borderColor = "red";
            isValid = false;
        }
        if (companyCheckboxElement.checked) {
            let currentNumber = numberElement.value;
            if (currentNumber < 1000 || currentNumber > 9999) {
                numberElement.style.borderColor = "red";
                isValid = false;
            } else {
                numberElement.style.borderColor = "none";
            }
        }
        if (isValid) {
            validElement.style.display = "block";
        } else {
            validElement.style.display = "none";
        }
    });
}

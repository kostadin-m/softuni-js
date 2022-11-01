function notify(message) {
    if (!message) {
        return;
    }
    let divElement = document.querySelector("#notification");
    divElement.textContent = message;
    divElement.style.display = "block";
    divElement.addEventListener("click", (e) => {
        e.target.style.display = "none";
    });
}

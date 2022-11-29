const userElement = document.querySelector(".nav-item-user");
const [...guestElements] = document.querySelectorAll(".nav-item-guest");

export function updateNav() {
    if (sessionStorage.getItem("id")) {
        userElement.style.display = "block";
        guestElements.forEach((el) => (el.style.display = "none"));
    } else {
        guestElements.forEach((el) => (el.style.display = "block"));
        userElement.style.display = "none";
    }
}

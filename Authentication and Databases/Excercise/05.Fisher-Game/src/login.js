(function () {
    const formElement = document.querySelector("form");

    formElement.addEventListener("submit", async (ev) => {
        const { email, password } = Object.fromEntries(new FormData(ev.currentTarget));
        const request = await fetch("http://localhost:3030/users/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const user = await request.json();
        localStorage.setItem("accessToken", user.accessToken);
        localStorage.setItem("email", email);
        alert("Logged in succesfully!");
        window.location.href = "/Authentication%20and%20Databases/Excercise/05.Fisher-Game/src/index.html";
    });
})();

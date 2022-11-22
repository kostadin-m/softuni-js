(function () {
    const formElement = document.querySelector("form");

    formElement.addEventListener("submit", async (ev) => {
        ev.preventDefault();
        try {
            const { email, password, rePass } = Object.fromEntries(new FormData(ev.currentTarget));
            console.log(password, rePass);
            if (password != rePass) {
                throw new Error("Passwords do not match");
            }
            const request = await fetch("http://localhost:3030/users/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const user = await request.json();
            localStorage.setItem("accessToken", user.accessToken);
            localStorage.setItem("email", email);
            alert("Registered succesfully!");
        } catch (err) {
            console.log(err.message);
        }
    });
})();

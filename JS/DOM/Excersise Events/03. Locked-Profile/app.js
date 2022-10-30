function lockedProfile() {
    const profilesElements = document.querySelectorAll("#main .profile");

    Array.from(profilesElements).forEach((profile) => {
        let ButtonElement = profile.querySelector("button");
        let lockStatus = profile.querySelector('input[type="radio"]');
        ButtonElement.addEventListener("click", showHideFunc);

        function showHideFunc() {
            if (ButtonElement.textContent == "Show more") {
                if (!lockStatus.checked) {
                    profile.querySelector("div").style.display = "inline-block";
                    ButtonElement.textContent = "Hide it";
                    lockStatus.checked = true;
                    ButtonElement.disabled = true;
                }
            } else if (ButtonElement.textContent == "Hide it") {
                profile.querySelector("div").style.display = "none";
                ButtonElement.textContent = "Show more";
            }
        }
    });
}

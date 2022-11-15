async function lockedProfile() {
    let mainDiv = document.querySelector("#main");

    const profiles = await fetch("http://localhost:3030/jsonstore/advanced/profiles");
    const profilesData = await profiles.json();

    createProfiles(profilesData);

    function createProfiles(data) {
        let counter = 1;
        Object.keys(data).forEach((x) => {
            if (counter === 1) {
                let hiddenDiv = document.querySelector(".profile > div");
                hiddenDiv.style.display = "none";
                let usernameElement = document.querySelector(".profile > [name='user1Username']");
                let emailElement = document.querySelector(".user1Username > [name='user1Email']");
                let ageElement = document.querySelector(".user1Username > [name='user1Age']");
                usernameElement.value = data[x].username;
                emailElement.value = data[x].email;
                ageElement.value = data[x].age;
            } else {
                const newElement = document.createElement("div");
                newElement.classList = "profile";
                newElement.innerHTML = `
                <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${counter}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${counter}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${counter}Username" value="${data[x].username}" disabled readonly />
				<div class="user${counter}Username" style="display: none">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${counter}Email" value="${data[x].email}" disabled readonly />
					<label>Age:</label>
					<input type="text" name="user${counter}Age" value="${data[x].age}" disabled readonly />
				</div>
				<button>Show more</button>`;
                mainDiv.appendChild(newElement);
            }
            counter++;
        });
    }
    const btns = [...document.querySelectorAll("button")];
    btns.forEach((btn) => btn.addEventListener("click", showHide));

    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.getElementsByTagName("div")[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
        let unlocked = lockStatus === "unlock" ? true : false;
        if (unlocked) {
            showMoreButton = button.textContent === "Show more" ? true : false;
            if (!showMoreButton && !unlocked) {
                button.disabled = true;
            } else if (showMoreButton) {
                moreInformation.style.display = "inline-block";
                button.textContent = "Hide it";
            } else {
                moreInformation.style.display = "none";
                button.textContent = "Show more";
            }
        }
    }
}

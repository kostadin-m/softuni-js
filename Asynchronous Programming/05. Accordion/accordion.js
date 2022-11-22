(async function solution() {
    let mainElement = document.querySelector("#main");
    const res = await fetch("http://localhost:3030/jsonstore/advanced/articles/list");
    const jsonData = await res.json();

    Object.keys(jsonData).forEach((x) => {
        let newElement = document.createElement("div");
        newElement.setAttribute("class", "accordion");
        newElement.innerHTML = `
            <div class="head">
            <span>${jsonData[x].title}</span>
            <button class="button" id="${jsonData[x]._id}">More</button>
        </div>
        <div class="extra">
            <p></p>
        </div>
    </div>`;
        mainElement.appendChild(newElement);
    });
    const btns = [...document.querySelectorAll("button")];
    btns.forEach((button) => {
        button.addEventListener("click", toggleButtons);
    });
    async function toggleButtons(e) {
        let extraElement = e.target.parentNode.parentNode.children[1];

        const currentButton = e.target;

        const getContent = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${currentButton.id}`);
        const parsedContent = await getContent.json();

        const hidden = currentButton.textContent === "More";
        currentButton.textContent = hidden ? "Less" : "More";
        extraElement.style.display = hidden ? "block" : "none";

        let pElement = extraElement.firstChild;
        pElement.textContent = parsedContent.content;
    }
})();

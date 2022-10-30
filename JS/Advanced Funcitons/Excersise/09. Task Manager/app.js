function solve() {
    let AddButton = document.querySelector("#add");
    let OpenElement = document.querySelector(".orange").parentNode.nextElementSibling;
    let InProgressElement = document.querySelector("#in-progress");
    let finishedElement = document.querySelector(".green").parentNode.nextElementSibling;

    let task = document.querySelector("#task");
    let description = document.querySelector("#description");
    let dueDate = document.querySelector("#date");

    function createElement(type, text, className) {
        let result = document.createElement(type);

        result.textContent = text;

        if (className) {
            result.className = className;
        }
        return result;
    }

    AddButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (task.value == "" || description.value == "" || dueDate.value == "") {
            return;
        }

        let article = createElement("article");
        let h3 = createElement("h3", task.value);
        let pDescription = createElement("p", "Description: " + description.value);
        let pDueDate = createElement("p", "Due Date: " + dueDate.value);
        let flexClass = createElement("div", undefined, "flex");
        let greenButton = createElement("button", "Start", "green");
        let redButton = createElement("button", "Delete", "red");

        flexClass.appendChild(greenButton);
        flexClass.appendChild(redButton);

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDueDate);
        article.appendChild(flexClass);
        OpenElement.appendChild(article);
        task.value = "";
        description.value = "";
        dueDate.value = "";

        redButton.addEventListener("click", (e) => {
            article.remove();
        });
        greenButton.addEventListener("click", (e) => {
            InProgressElement.appendChild(article);
            let finishButton = createElement("button", "Finish", "orange");
            greenButton.remove();
            flexClass.appendChild(finishButton);
            finishButton.addEventListener("click", (e) => {
                flexClass.remove();
                finishedElement.appendChild(article);
            });
        });
    });
}

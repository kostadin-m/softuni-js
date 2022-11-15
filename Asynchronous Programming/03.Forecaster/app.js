function attachEvents() {
    let buttonElement = document.querySelector("#submit");
    let textElement = document.querySelector("#location");
    let divElement = document.querySelector("#forecast");
    let currentDivElement = document.querySelector("#current");
    let upcomingDivElement = document.querySelector("#upcoming");

    const mainURL = "http://localhost:3030/jsonstore/forecaster";
    const weatherSymbols = {
        Sunny: "☀",
        "Partly sunny": "⛅",
        Overcast: "☁",
        Rain: "☂",
        Degrees: "°",
    };
    buttonElement.addEventListener("click", async () => {
        try {
            const mainJSON = await fetch(`${mainURL}/locations/`);
            const locationsData = await mainJSON.json();
            const code = getCode(locationsData);

            const currentJSON = await fetch(`${mainURL}/today/${code}`);
            const currentData = await currentJSON.json();

            const upcomingJSON = await fetch(`${mainURL}/upcoming/${code}`);
            const upcomingData = await upcomingJSON.json();

            renderCurrent(currentData);
            renderUpcoming(upcomingData);
        } catch (err) {
            removeLastResult();
            divElement.style.display = "block";
            const error = createElement("div", "Error", "forecasts");
            const errorMsg = createElement("div", "Invalid input!", "forecasts");

            currentDivElement.appendChild(error);
            upcomingDivElement.appendChild(errorMsg);
        }
    });
    function createElement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;
        if (className) {
            result.className = className;
        }
        return result;
    }
    function getCode(data) {
        let validCode = "";
        Object.keys(data).forEach((x) => {
            if (data[x].name === textElement.value) {
                validCode = data[x].code;
                validInput = true;
            }
        });
        if (validCode === "") {
            throw new Error("Invalid Code!");
        }
        return validCode;
    }
    function removeLastResult() {
        while (currentDivElement.childNodes.length > 2) {
            currentDivElement.removeChild(currentDivElement.lastChild);
        }
        while (upcomingDivElement.childNodes.length > 2) {
            upcomingDivElement.removeChild(upcomingDivElement.lastChild);
        }
    }
    function renderCurrent(data) {
        removeLastResult();
        divElement.style.display = "block";

        let forecastsDiv = createElement("div", "", "forecasts");
        forecastsDiv.appendChild(createElement("span", `${weatherSymbols[data.forecast.condition]}`, "condition symbol"));

        let condition = createElement("span", "", "condition");
        condition.appendChild(createElement("span", `${data.name}`, "forecast-data"));
        condition.appendChild(createElement("span", `${data.forecast.low}°/${data.forecast.high}°`, "forecast-data"));
        condition.appendChild(createElement("span", `${data.forecast.condition}`, "forecast-data"));
        forecastsDiv.appendChild(condition);
        currentDivElement.appendChild(forecastsDiv);
    }
    function renderUpcoming(data) {
        let upcomingDiv = createElement("div", "", "forecastinfo");
        data.forecast.forEach((x) => {
            let spanElement = createElement("span", "", "upcoming");
            spanElement.appendChild(createElement("span", `${weatherSymbols[x.condition]}`, "symbol"));
            spanElement.appendChild(createElement("span", `${x.low}°/${x.high}°`, "forecast-data"));
            spanElement.appendChild(createElement("span", `${x.condition}`, "forecast-data"));
            upcomingDiv.appendChild(spanElement);
        });
        upcomingDivElement.appendChild(upcomingDiv);
    }
}
attachEvents();

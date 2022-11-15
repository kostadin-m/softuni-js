function solve() {
    let infoElement = document.querySelector("#info");
    let departButtonElement = document.querySelector("#depart");
    let arriveButtonElement = document.querySelector("#arrive");

    const url = "http://localhost:3030/jsonstore/bus/schedule";
    let currentBusStop = "";
    let nextStopID = "depot";

    function depart() {
        fetch(`${url}/${nextStopID}`)
            .then((res) => res.json())
            .then((data) => {
                currentBusStop = data.name;
                infoElement.textContent = `Next stop ${currentBusStop}`;
                toggleButtons();
                nextStopID = data.next;
            })
            .catch((err) => {
                toggleButtons(true);
            });
    }
    function arrive() {
        toggleButtons();
        infoElement.textContent = `Arriving at ${currentBusStop}`;
    }
    function toggleButtons(err = false) {
        if (err) {
            arriveButtonElement.disabled = true;
            departButtonElement.disabled = true;
            return;
        }
        if (!arriveButtonElement.disabled && departButtonElement.disabled) {
            arriveButtonElement.disabled = true;
            departButtonElement.disabled = false;
            return;
        }
        departButtonElement.disabled = true;
        arriveButtonElement.disabled = false;
        return;
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();

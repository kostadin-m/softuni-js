function getInfo() {
    let busStopName = document.querySelector("#stopName");
    let busses = document.querySelector("#buses");
    let busTCheck = document.querySelector("#stopId");
    let url = `http://localhost:3030/jsonstore/bus/businfo/${busTCheck.value}`;

    async function getBusses() {
        busStopName.textContent = "Loading...";
        let result = await fetch(url);
        result = await result.json();
        return result;
    }
    getBusses()
        .then((data) => {
            busStopName.textContent = data.name;
            Object.keys(data.buses).forEach((x) => {
                let liElement = document.createElement("li");
                liElement.textContent = `Bus ${x} arrives in ${data.buses[x]} minutes`;
                busses.appendChild(liElement);
            });
        })
        .catch((err) => {
            busStopName.textContent = "Error";
            busses.innerHTML = "";
        });
}

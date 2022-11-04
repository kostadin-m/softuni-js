function Tickets(array, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let finalArr = [];
    array.forEach((x) => {
        let [town, price, status] = x.split("|");
        finalArr.push(new Ticket(town, Number(price), status));
    });
    finalArr.sort((a, b) => {
        return !isNaN(a[sortingCriteria])
            ? [sortingCriteria] - b[sortingCriteria]
            : a[sortingCriteria].localeCompare(b[sortingCriteria]);
    });
    return finalArr;
}

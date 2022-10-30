function getDays(month,year){
    let daysInMonth = new Date(year, month, 0).getDate();
    console.log(daysInMonth)
}

getDays(7,2020)
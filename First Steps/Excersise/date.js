function demo(year,month,day){
    let DateInput = `${year}-${month}-${day}`
    let date = new Date(DateInput)
    date.setDate(date.getDate()-1)
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
}

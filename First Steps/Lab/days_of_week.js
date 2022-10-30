function dayToNumber(day){
    obj = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }
    
    if (day in obj) {
    console.log(obj[day])
}   else {
    console.log('error')
  } 
}
dayToNumber('Monday')
dayToNumber('Tuesday')
dayToNumber('Wednessday')
dayToNumber('Blabla')

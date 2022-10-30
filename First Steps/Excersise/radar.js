function radar(speed,area){
    obj ={
        'motorway':130,
        'interstate':90,
        'city':50,
        'residential':20
    }    
    speedLimit = obj[area]
    if (speed<= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else if (speed - speedLimit <= 20){
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`)
    } else if (speed - speedLimit <= 40){
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
    } else {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
    }
}

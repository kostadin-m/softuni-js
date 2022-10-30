function circleArea(p1){
    let area = 0
    const pi = Math.PI
    if (typeof p1  === 'number'){
        area = pi * Math.pow(p1,2)
        console.log(area.toFixed(2))
    } else {
        console.log('We can not calculate the circle area, because we receive a '+ typeof p1 + '.')
    }

}

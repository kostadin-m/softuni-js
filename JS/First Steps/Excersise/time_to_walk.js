function timeToWalk(steps,footprint,kmh){
    let distance = steps * footprint
    let speed = kmh * 1000 / 3600
    let minutes_resting = Math.floor(distance / 500)*60
    let time = (distance / speed) + minutes_resting

    let hours = Math.floor(time / 3600).toFixed().padStart(2,'0')
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2,'0')
    let seconds = Math.ceil(time % 60).toFixed().padStart(2,'0')
    console.log(`${hours}:${minutes}:${seconds}`)
    
}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)
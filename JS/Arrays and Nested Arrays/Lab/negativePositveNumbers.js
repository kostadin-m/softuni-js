function negativePositive(array){
    let formattedArray = []
    for (n of array){
        let number = Number(n)
        if (number < 0) {
            formattedArray.unshift(number)       
        } else {
            formattedArray.push(number)
        }
    }
    console.log(formattedArray.join('\n'));
}

negativePositive([7, -2, 8, 9])
negativePositive([3, -2, 0, -1])
function aggregateElements(array) {

    let numbersArray = array.map(Number);

    let sum = numbersArray.reduce((a, b) => a + b);

    let inverseValue = 0
    for (let i = 0; i < array.length;i ++){
        inverseValue += 1 /array[i]
    }

    let stringConcat = numbersArray.join('');

    console.log(sum)
    console.log(inverseValue)
    console.log(stringConcat)
}

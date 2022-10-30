function extractedArr(array){
    let extractedArr = []
    let biggestNum = -3000000
    for (num of array){
        if (num >= biggestNum){
            biggestNum = num
            extractedArr.push(num)
        }
    }
    return extractedArr
}
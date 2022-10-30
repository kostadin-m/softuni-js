function sortingNumbers(array){
    sortedArr = array.sort((a,b)=> a-b)
    finalArr = []
    while (sortedArr.length !== 0){
        finalArr.push(sortedArr.shift())
        finalArr.push(sortedArr.pop())

    }
    return finalArr      
}

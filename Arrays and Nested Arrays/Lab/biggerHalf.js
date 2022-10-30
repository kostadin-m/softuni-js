function biggerHalf(array){
    let sortedArr = array.sort(function(a, b){return a - b})
    let firstHalf = sortedArr.slice(0,sortedArr.length /2)
    let secondHalf = sortedArr.slice(sortedArr.length /2)
    const reducer = (accumulator, curr) => accumulator + curr;
    let firstSum = firstHalf.reduce(reducer)
    let secondSum = secondHalf.reduce(reducer)
    
    if (firstSum > secondSum){
        return firstHalf
    }
    return secondHalf
}


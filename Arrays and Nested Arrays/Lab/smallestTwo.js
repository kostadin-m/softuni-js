function smallestTwo(array){
    let sortedArray = array.sort(function(a, b){return a - b});
    console.log(sortedArray.slice(0,2).join(' '))
}
smallestTwo([30, 15, 50, 5])
smallestTwo([3,0,10,4,7,3])

function findOdd(array){
    let oddPos = array.filter(function(el, ind){
        return ind % 2 != 0;}).reverse();
        return oddPos.map(n => n*2).join(' ')
}
console.log(findOdd([10, 15, 20, 25]))
console.log(findOdd([3, 0, 10, 4, 7, 3]))
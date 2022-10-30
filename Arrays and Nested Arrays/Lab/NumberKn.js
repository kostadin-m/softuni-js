function findNumber (n,k){
    let arrayOfSums = [1]
    for (let i = 1; i < n;i++){
        
        let sum = arrayOfSums.slice(-k).reduce((acc,value) =>{
            return acc + value
        },0)
        arrayOfSums.push(sum)
    }
    return arrayOfSums
}

console.log(findNumber(6,3))
console.log(findNumber(8,2))
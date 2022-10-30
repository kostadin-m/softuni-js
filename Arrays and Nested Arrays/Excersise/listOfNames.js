function listOfNames(array){
    let sortedArr = array.sort((a,b)=> a.localeCompare(b))
    let orderNumber = 1
    sortedArr.forEach((name)=>{
        console.log(`${orderNumber}.${name}`)
        orderNumber++
    })
}

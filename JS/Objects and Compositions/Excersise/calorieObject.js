function calorieObject(array){
    let obj = {}
    
    for (let i = 0; i < array.length;i++){
        obj[array[i]] = Number(array[i+1])
        i++
    }
    return obj
}
console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
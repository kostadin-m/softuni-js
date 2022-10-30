function rotateArr(array,n){
    for (let i = 0; i < n; i++){
        lastItem = array.pop()
        array.unshift(lastItem)
    }
    return array.join(' ')
}   

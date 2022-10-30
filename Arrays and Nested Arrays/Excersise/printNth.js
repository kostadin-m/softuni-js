function everyNth(array,n){
    return array.filter(getIndex = (num,index) =>{
        return index % n == 0
    })
}

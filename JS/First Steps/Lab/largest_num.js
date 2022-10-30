function checkLargest (arg1,arg2,arg3){
    let biggestNum = -20000
    let array_of_args = [arg1,arg2,arg3]
    for (num in array_of_args){
        if (array_of_args[num] > biggestNum)  biggestNum = array_of_args[num]
    }
    console.log('The largest number is '+ biggestNum +'.')

}


checkLargest(5, -3, 16)
function addRemoveEl(array){
    let number = 0
    let arrayOfNums = []
    for (command of array){
        number +=1
        switch (command){
            case 'add':
                arrayOfNums.push(number)
                break;
            case 'remove':
                arrayOfNums.pop()
        }
    }
    if (arrayOfNums.length == 0){
        return 'Empty'
    }
    return arrayOfNums.join('\n')
}

function func(par1,par2,par3){
    let numbers = [par1,par2,par3]
    let sum = 0
    for (num in numbers){
        let len = numbers[num].length
        sum += len
    }
    console.log(sum)
    console.log(Math.floor(sum / 3))
}

func('chocolate', 'ice cream', 'cake')
func('pasta', '5', '22.3')
function findBiggest(matrix){
    let biggestNum = -3000
    for (el of matrix){
        for (inside_el of el){
            if (inside_el > biggestNum){
                biggestNum = inside_el
            }
        }
    }
    return biggestNum
}

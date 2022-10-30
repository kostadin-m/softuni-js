function magicMatrix(array){
    let result = true
    for (let i = 0;i < 1;i++){
        for (let x = 0; x < array[i].length;x++){
            if (sumOfRows(i) != sumOfCollumns(x)){
                return false               
            }
            function sumOfCollumns(col){
                let sum = 0
                for (let row = 0; row < array.length;row++){
                    sum += array[row][col]
                }  
                return sum  
            }
            function sumOfRows(row){
                let sum = 0
                for (let col = 0; col < array[row].length;col++){
                    sum += array[row][col]
                }
                return sum
            }
        }
    }
    return result
}



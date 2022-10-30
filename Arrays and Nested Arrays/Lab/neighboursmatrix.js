function neighboursMatrix(matrix){
    let countNeighbours = 0
    isValid = (par,size) => par < size

    for (let i =0 ; i < matrix.length;i++){
        for (let x =0;x< matrix[i].length;x++){
            
            if(isValid(i+1,matrix.length)){
                if (matrix[i][x] == matrix[i+1][x]){
                    countNeighbours++
                }
            }
            
            if (isValid(x+1,matrix[i].length)){
                if (matrix[i][x] == matrix[i][x+1]){
                    countNeighbours++
                }
            }
        }
    }
    return countNeighbours
}

function pieceOfPie(array,start,end){
    let newFlavors = []
    let startFound = false
    for (flavour of array){
        if (flavour == start){
            startFound = true
        } if (startFound){
            newFlavors.push(flavour)
        }if (flavour == end){
            startFound = false
            break
        }
    }
    return newFlavors
}

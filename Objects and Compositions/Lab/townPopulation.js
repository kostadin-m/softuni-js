function townPopulation(array){
    let townsObj = {}
    for (const info of array){
        townInfo = info.split(' <-> ')
        let townName = townInfo[0]
        let townPopulation = Number(townInfo[1])
        
        if (!townsObj[townName]){
            townsObj[townName] = 0
        } 
        townsObj[townName] += townPopulation
    }
    Object.keys(townsObj).forEach(x => {
        console.log(`${x} : ${townsObj[x]}`)
    })
}

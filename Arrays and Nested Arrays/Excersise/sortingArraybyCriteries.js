function sortingArr(arr){
    sortedArr = arr.sort((a,b)=>{
        a.length - b.length || a.localeCompare(b)
    })
    return sortedArr.join('\n')
}

console.log(sortingArr(['alpha', 
'beta', 
'gamma']));
function evenValues(array){
    let evenValuesArr = array.filter(w => array.indexOf(w) % 2 ==0).join(' ')
    
    console.log(evenValuesArr)
}
evenValues(['20', '30', '40', '50', '60'])
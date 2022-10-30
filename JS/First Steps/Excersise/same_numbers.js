function sameNumber(number){
    let numToStr = number.toString();
    let compareTo = Number(numToStr[0]);
    let result = 'true';
    let sum = 0;
    for (let i = 0; i < numToStr.length;i++){
        sum += Number(numToStr[i]);
        if (numToStr[i] != compareTo){
            result = 'false';
        }
    }
    console.log(result);
    console.log(sum);
}
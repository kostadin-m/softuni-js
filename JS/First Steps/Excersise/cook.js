function cook (number,...args){
    func_caller = {'chop' : chop,'dice':dice,'spice':spice,'bake':bake,'fillet':fillet}
    let numberForFunction = Number(number)
    for (let i = 0;  i < args.length;i++){
        let func_reffernce = func_caller[args[i]]
        numberForFunction = func_reffernce(numberForFunction)
    console.log(numberForFunction)
    } 
}
function chop(num){
    return num /2
}
function dice(num){
    return Math.sqrt(num)
}
function spice(num){
    return num +=1
}
function bake(num){
    return num * 3
}
function fillet(num){
    return num -= num * 0.2
}


cook('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
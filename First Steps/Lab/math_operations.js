function math(x,y,operator){
    let result = 0;
    switch (operator) {
        case '+': result = x + y ; break;
        case '-': result = x - y ; break;
        case '/': result = x / y ; break;
        case '*': result = x * y ; break;
        case '**': result = x ** y ; break;
        case '%': result = x % y ; break;
    }
    console.log(result);
}

math(5, 6, '+')
math(3, 5.5, '*')
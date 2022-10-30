function calculator() {
    let input1;
    let input2;
    let results;
    return {
        init: (selector1, selector2, result) => {
            input1 = document.querySelector(selector1);
            input2 = document.querySelector(selector2);
            results = document.querySelector(result);
        },
        add() {
            results.value = Number(input1.value) + Number(input2.value);
        },
        subtract() {
            results.value = Number(input1.value) - Number(input2.value);
        },
    };
}

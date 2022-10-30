function solution(number) {
    function addNumber(a, b) {
        return (a += b);
    }
    return addNumber.bind(this, number);
}

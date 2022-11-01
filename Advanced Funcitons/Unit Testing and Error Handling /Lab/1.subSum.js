function subSum(array, from, to) {
    if (!Array.isArray(array)) {
        return NaN;
    }
    let firstIndex = Math.max(from, 0);
    let secondIndex = Math.min(to, array.length - 1);

    array = array.slice(firstIndex, secondIndex + 1);
    let sum = array.reduce((a, x) => (a += Number(x)), 0);
    return sum;
}

console.log(subSum([10, "twenty", 30, 40], 0, 2));

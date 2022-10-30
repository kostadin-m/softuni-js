function solution() {
    let result = "";

    return {
        append(str) {
            result += str;
        },
        removeStart(n) {
            result = result.substring(n);
        },
        removeEnd(n) {
            result = result.substring(0, result.length - n);
        },
        print() {
            console.log(result);
        },
    };
}

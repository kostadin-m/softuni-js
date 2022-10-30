function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
    let result = [];
    JSON.parse(input).forEach((x) => {
        result.push({
            area: area.call(x),
            volume: vol.call(x),
        });
    });
    return result;
}

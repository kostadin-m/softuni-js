(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (number) {
        return this.filter((_, index) => index >= number);
    };
    Array.prototype.take = function (number) {
        return this.filter((_, index) => index < number);
    };
    Array.prototype.sum = function () {
        return this.reduce((total, number) => (total += number));
    };
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})();

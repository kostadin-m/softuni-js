(function solve() {
    String.prototype.ensureStart = function (value) {
        if (!this.toString().startsWith(value)) {
            return value + this.toString();
        }
        return this;
    };
    String.prototype.ensureEnd = function (value) {
        if (!this.toString().endsWith(value)) {
            return this.toString() + value;
        }
        return this.toString();
    };
    String.prototype.isEmpty = function () {
        return this.length == 0 ? true : false;
    };
    String.prototype.truncate = function (number) {
        if (number < 3) {
            return ".".repeat(number);
        }
        if (this.length <= number) {
            return this.toString();
        }
        let lastIndex = this.toString()
            .substring(0, number - 2)
            .lastIndexOf(" ");
        if (lastIndex !== -1) {
            return this.toString().substring(0, lastIndex) + "...";
        }
        return this.toString().substring(0, number - 3) + "...";
    };
    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }
        return string;
    };
})();

let str = "my string";
str = str.ensureStart("my");
str = str.ensureStart("hello ");
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);

str = String.format("The {0} {1} fox", "quick", "brown");
str = String.format("jumps {0} {1}", "dog");

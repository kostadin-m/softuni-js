class Stringer {
    constructor(string, length) {
        this.innerLength = length;
        this.innerString = string;
    }
    increase(value) {
        this.innerLength += value;
    }
    decrease(value) {
        if (this.innerLength - value < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= value;
        }
    }
    toString() {
        let truncated = this.innerString.substring(0, this.innerLength);
        return truncated.length === this.innerString.length ? truncated : `${truncated}...`;
    }
}

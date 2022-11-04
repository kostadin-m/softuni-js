class Circle {
    pi = Math.PI;
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return 2 * this.radius;
    }
    set diameter(value) {
        this.radius = value / 2;
    }
    get area() {
        return this.pi * this.radius ** 2;
    }
}

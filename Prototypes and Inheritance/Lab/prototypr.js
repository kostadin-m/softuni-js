function das() {
    class Figure {
        constructor(units) {
            this.units = !units ? "cm" : units;
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
        changeUnits(value) {
            this.units = value;
        }
        unitConvertor(type, value) {
            const units = { cm: 1, m: 0.1, mm: 10 };
            return value * units[type];
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        get radius() {
            return this.unitConvertor(this.units, this._radius);
        }
        get area() {
            return Math.PI * this.radius ** 2;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    class Rectangle extends Figure {
        constructor(height, width, units) {
            super(units);
            this._height = height;
            this._width = width;
        }
        get height() {
            return this.unitConvertor(this.units, this._height);
        }
        get width() {
            return this.unitConvertor(this.units, this._width);
        }
        get area() {
            return this.height * this.width;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    return { Figure, Circle, Rectangle };
}

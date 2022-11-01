const { expect } = require("chai");
const createCalculator = require("./addSubtract");

describe("Tests for addSubtract Function", () => {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
    it("should return object", () => {
        expect(typeof calc).to.be.equal(typeof {});
    });
    it("should return object that has add", () => {
        expect(calc.hasOwnProperty("add")).to.be.equal(true);
    });
    it("should return object that has subtract", () => {
        expect(calc.hasOwnProperty("subtract")).to.be.equal(true);
    });
    it("should return object that has get", () => {
        expect(calc.hasOwnProperty("get")).to.be.equal(true);
    });
    it("should return object value 0", () => {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });
    it("should return object value 2", () => {
        calc.add(2);
        expect(calc.get()).to.be.equal(2);
    });
    it("should return object value 0", () => {
        calc.add(2);
        calc.subtract(2);
        expect(calc.get()).to.be.equal(0);
    });
    it("should return object value 2", () => {
        calc.add("2");
        expect(calc.get()).to.be.equal(2);
    });
    it("should return object value 0", () => {
        calc.add("2");
        calc.subtract("2");
        expect(calc.get()).to.be.equal(0);
    });
});

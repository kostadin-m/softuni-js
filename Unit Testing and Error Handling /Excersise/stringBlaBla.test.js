const { expect } = require("chai");
const isOddOrEven = require("./stringBlaBla");

describe("Tests for Function Is odd or even", () => {
    beforeEach(function () {
        func = isOddOrEven;
    });
    it("should return undefined if its a number", () => {
        expect(func(2)).to.be.equal(undefined);
    });
    it("should return undefined if its an object", () => {
        expect(func({ da: 23 })).to.be.equal(undefined);
    });
    it("should return undefined if its an array", () => {
        expect(func(["test"])).to.be.equal(undefined);
    });
    it("should return odd on the string: gergana", () => {
        expect(func("gergana")).to.be.equal("odd");
    });
    it("should return odd on the string god", () => {
        expect(func("god")).to.be.equal("odd");
    });
    it("should return even on the string: cake", () => {
        expect(func("cake")).to.be.equal("even");
    });
    it("should return even on the string: clocks", () => {
        expect(func("clocks")).to.be.equal("even");
    });
});

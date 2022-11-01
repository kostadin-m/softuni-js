const { expect } = require("chai");
const isSymmetric = require("./checkForSymmetry");

describe("Tests for Symmetry in funciton", () => {
    it("should return false if its not arrayy", () => {
        expect(isSymmetric(2)).to.be.equal(false);
    });
    it("should return false if it is not symetric and it is array", () => {
        expect(isSymmetric([1, 2, 3, 4, 5, 6])).to.be.equal(false);
    });
    it("should return true on symetric", () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.equal(true);
    });
    it("should return false on non symetric", () => {
        expect(isSymmetric([1, 2, 3, 4, 5])).to.be.equal(false);
    });
    it("should return true if symetric", () => {
        expect(isSymmetric([[1], [2], [1]])).to.be.equal(true);
    });
});

const { expect } = require("chai");
const lookupChar = require("./charLookUp");

describe("tests for charLookupFunction", () => {
    beforeEach(function () {
        look = lookupChar;
    });
    it("should return undefined if input is not string", () => {
        expect(look(2, 5)).to.be.equal(undefined);
    });
    it("should return undefined if input is not string", () => {
        expect(look([2], 5)).to.be.equal(undefined);
    });
    it("should return Incorrect index if index is bigger than the string length", () => {
        expect(look("ada", 5)).to.be.equal("Incorrect index");
    });
    it("should return Incorrect index if index is smaller than zero", () => {
        expect(look("concatenate", -1)).to.be.equal("Incorrect index");
    });
    it("should return undefined if index is float", () => {
        expect(look("concatenate", 2.3)).to.be.equal(undefined);
    });
    it("should return undefined if index is string", () => {
        expect(look("concatenate", "2")).to.be.equal(undefined);
    });
    it("should return a on ada's 0 index", () => {
        expect(look("ada", 0)).to.be.equal("a");
    });
    it("should return d on ada's first index", () => {
        expect(look("ada", 1)).to.be.equal("d");
    });
    it("should return t on concatenate's first index", () => {
        expect(look("concatenate", 5)).to.be.equal("t");
    });
});

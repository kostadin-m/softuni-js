const { expect } = require("chai");
const mathEnforcer = require("./mathEnforcers");

describe("tests for mathEnforcer function", () => {
    describe("AddFive Function", () => {
        it("should return undefined on addFive with other than number", () => {
            expect(mathEnforcer.addFive("ddas")).to.be.equal(undefined);
        });
        it("should return undefined on addFive with other than number", () => {
            expect(mathEnforcer.addFive()).to.be.equal(undefined);
        });
        it("should return undefined on addFive with other than number", () => {
            expect(mathEnforcer.addFive([23])).to.be.equal(undefined);
        });
        it("should return undefined on addFive with other than number", () => {
            expect(mathEnforcer.addFive({ blabla: 42 })).to.be.equal(undefined);
        });
        it("should return correct resyult if string is convertable to Number", () => {
            expect(mathEnforcer.addFive("4")).to.be.equal(undefined);
        });
        it("should return 9 to an AddFive with 4", () => {
            expect(mathEnforcer.addFive(4)).to.be.equal(9);
        });
        it("should return 0 to an AddFive with -5", () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it("should return 10.5 to an AddFive with 5.5", () => {
            expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5);
        });
        it("should expect a close to floating point", () => {
            expect(mathEnforcer.addFive(5.53543543534534453)).to.be.closeTo(10.53543543534534453, 0.01);
        });
        it("should expect a close to floating point", () => {
            expect(mathEnforcer.addFive(-5.53543543534534453)).to.be.closeTo(-0.53543543534534453, 0.01);
        });
        it("should expect a close to floating point", () => {
            expect(mathEnforcer.addFive("5.53543543534534453")).to.be.equal(undefined);
        });
    });
    describe("Subract Ten function", () => {
        it("should return undefined on subtractTen with other type than number", () => {
            expect(mathEnforcer.subtractTen("asd")).to.be.equal(undefined);
        });
        it("should return undefined on subtractTen with other type than number", () => {
            expect(mathEnforcer.subtractTen([5])).to.be.equal(undefined);
        });
        it("should return undefined on subtractTen with other type than number", () => {
            expect(mathEnforcer.subtractTen({ asd: 32 })).to.be.equal(undefined);
        });
        it("should return correct resyult if string is convertable to Number", () => {
            expect(mathEnforcer.subtractTen("15")).to.be.equal(undefined);
        });
        it("should return -5 to an subtractTen with a 5", () => {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        });
        it("should return -20 to an subtractTen with a -10", () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
        it("should return 0.5 to an subtractTen with a 10.5", () => {
            expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5);
        });
        it("should expect ", () => {
            expect(mathEnforcer.subtractTen(11.3456456456456)).to.be.closeTo(1.3456456456456, 0.01);
        });
        it("should expect ", () => {
            expect(mathEnforcer.subtractTen(-11.3456456456456)).to.be.closeTo(-21.3456456456456, 0.01);
        });
        it("should expect ", () => {
            expect(mathEnforcer.subtractTen("11.3456456456456")).to.be.equal(undefined);
        });
    });
    describe("Sum Function", () => {
        it("should return undefined on Sum with other than number", () => {
            expect(mathEnforcer.sum(1, "asd")).to.be.equal(undefined);
        });
        it("should return correct resyult if string is convertable to Number", () => {
            expect(mathEnforcer.sum("4", "5")).to.be.equal(undefined);
        });
        it("should return correct resyult if string is convertable to Number", () => {
            expect(mathEnforcer.sum("dasdsa", 5)).to.be.equal(undefined);
        });
        it("should return closeToFloat to sum", () => {
            expect(mathEnforcer.sum("-5.8456456456", "-5.8456465645456456")).to.be.equal(undefined);
        });
        it("should return  to an float", () => {
            expect(mathEnforcer.sum(5.765567, 6.654654)).to.be.closeTo(12.420221, 0.01);
        });
        it("should return 10 to sum with 5+5", () => {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        });
        it("should return -11.6 to an subtractTen with a -10", () => {
            expect(mathEnforcer.sum(5.8, -5.8)).to.be.equal(0);
        });
        it("should return -10 to sum with -5+-5", () => {
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
        });
        it("should return 11 to sum with 5.5+5.5", () => {
            expect(mathEnforcer.sum(5.5, 5.5)).to.be.equal(11);
        });
        it("should return 11.6 to sum with 5.5+5.5", () => {
            expect(mathEnforcer.sum(5.8, 5.8)).to.be.equal(11.6);
        });
        it("should return closeToFloat to sum", () => {
            expect(mathEnforcer.sum(5.8456456456, 5.8456465645456456)).to.be.closeTo(11.691292210145646, 0.01);
        });
        it("should return closeToFloat to sum", () => {
            expect(mathEnforcer.sum(-5.8456456456, -5.8456465645456456)).to.be.closeTo(-11.691292210145646, 0.01);
        });
    });
});

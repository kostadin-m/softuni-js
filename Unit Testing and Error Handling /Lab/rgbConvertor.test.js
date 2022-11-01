const rgbToHexColor = require("./rgbConvertor");
const { expect, should } = require("chai");

describe("Tests for RGB Convertor", () => {
    it("should return undefined if red < 0", () => {
        expect(rgbToHexColor(-3, 54, 45)).to.be.equal(undefined);
    });
    it("should return false if red > 255", () => {
        expect(rgbToHexColor(257, 54, 45)).to.be.equal(undefined);
    });
    it("should return undefined if green < 0", () => {
        expect(rgbToHexColor(45, -5, 45)).to.be.equal(undefined);
    });
    it("should return false if green > 255", () => {
        expect(rgbToHexColor(45, 276, 45)).to.be.equal(undefined);
    });
    it("should return undefined if blue < 0", () => {
        expect(rgbToHexColor(43, 54, -54)).to.be.equal(undefined);
    });
    it("should return false if blue > 255", () => {
        expect(rgbToHexColor(43, 54, -54)).to.be.equal(undefined);
    });
    it("should retrun false if some of them are not numbers", () => {
        expect(rgbToHexColor("asd", 5, 5)).to.be.equal(undefined);
    });
    it("should retrun false if some of them are not numbers", () => {
        expect(rgbToHexColor(5, "asd", 5)).to.be.equal(undefined);
    });
    it("should retrun false if some of them are not numbers", () => {
        expect(rgbToHexColor(5, 5, "asd")).to.be.equal(undefined);
    });
    it("should retrun true if every color is right", () => {
        expect(rgbToHexColor("5", "5", "5")).to.be.equal(undefined);
    });
    it("should retrun true if every color is right", () => {
        expect(rgbToHexColor(5, 5, 5)).to.be.equal("#050505");
    });
    it("should retrun true if every color is right", () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
    });
    it("should retrun true if every color is right", () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
    });
});

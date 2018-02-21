let expect = require("chai").expect;
let isSymmetric = require("../index").isSymmetric;

describe("isSymmetric(arr) - check symmetry of array", function () {
    it("should return false for non array argument", function () {
        expect(isSymmetric(1,2,1)).to.be.false;
    });
    it("should return false for [1,2,3,4,1]", function () {
        expect(isSymmetric([1,2,3,4,1])).to.be.false;
    });
    it("should return true for [1,2,3,2,1]", function () {
        expect(isSymmetric([1,2,3,2,1])).to.be.true;
    });
    it("should return false for [1,2,3,4,2,1]", function () {
        expect(isSymmetric([1,2,3,4,2,1])).to.be.false;
    });
    it("should return true for [1,2,3,3,2,1]", function () {
        expect(isSymmetric([1,2,3,3,2,1])).to.be.true;
    });
    it("should return false for [-1,2,1]", function () {
        expect(isSymmetric([-1,2,1])).to.be.false;
    });
    it("should return true for [-1,2,-1]", function () {
        expect(isSymmetric([-1,2,-1])).to.be.true;
    });
    it("should return true for empty array", function () {
        expect(isSymmetric([])).to.be.true;
    });
    it("should return true for [1]", function () {
        expect(isSymmetric([1])).to.be.true;
    });
    it("should return false for [1,2]", function () {
        expect(isSymmetric([1,2])).to.be.false;
    });
    it("should return true for [1.5, 2.5, 1.5]", function () {
        expect(isSymmetric([1.5, 2.5, 1.5])).to.be.true;
    });
    it("should return true for [1,'hello',{a:2},new Map(),{a:2},'hello',1]", function () {
        expect(isSymmetric([1,'hello',{a:2},new Map(),{a:2},'hello',1])).to.be.true;
    });
    it("should return false for [1,'hello',{a:3},new Date(),{a:2},'hello',1]", function () {
        expect(isSymmetric([1,'hello',{a:3},new Date(),{a:2},'hello',1])).to.be.false;
    });
});
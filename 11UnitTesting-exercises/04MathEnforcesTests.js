let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let mathEnforcer = require("../index").mathEnforcer;

describe('math function that return object with three methods', function () {
  describe('addFive', function () {
    it("should return undefined for non-number parameter", function () {
      expect(mathEnforcer.addFive("5")).to.be.equal(undefined);
    });
    it("should return correct result for positive integer parameter", function () {
      expect(mathEnforcer.addFive(15)).to.be.equal(20);
    });
    it("should return correct result for negative integer parameter", function () {
      expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
    });
    it("should return correct result for floating point integer parameter", function () {
      expect(mathEnforcer.addFive(3.23)).to.be.closeTo(8.23, 0.01);
    });
  });
  describe('subtractTen', function () {
    it("should return undefined for non-number parameter", function () {
      expect(mathEnforcer.subtractTen("5")).to.be.equal(undefined);
    });
    it("should return correct result for positive integer parameter", function () {
      expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
    });
    it("should return correct result for negative integer parameter", function () {
      expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
    });
    it("should return correct result for floating point integer parameter", function () {
      expect(mathEnforcer.subtractTen(13.23)).to.be.closeTo(3.23, 0.01);
    });
  });
  describe('sum', function () {
    it("should return undefined for non-number first parameter", function () {
      expect(mathEnforcer.sum("5",3)).to.be.equal(undefined);
    });
    it("should return undefined for non-number second parameter", function () {
      expect(mathEnforcer.sum(2,"5")).to.be.equal(undefined);
    });
    it("should return correct result for  integer parameters", function () {
      expect(mathEnforcer.sum(15,-2)).to.be.equal(13);
    });
    it("should return correct result for floating point parameters", function () {
      expect(mathEnforcer.sum(1.5,-3.6)).to.be.closeTo(-2.1,0.01);
    });
    it("should return correct result for floating point integer parameter", function () {
      expect(mathEnforcer.sum(3.23,1.2)).to.be.closeTo(4.43,0.01);
    });
  });
});


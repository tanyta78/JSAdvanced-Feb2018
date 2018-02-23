let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let isOddOrEven = require("../index").isOddOrEven;

describe('checks whether a passed in string has even or odd length', function () {

  it('should return undefined if passed parameter is a number', function () {
    expect(isOddOrEven(12)).to.equal(undefined,'Function did not return the correct result!');
  });
  it('should return undefined if passed parameter is an object', function () {
    expect(isOddOrEven({name:'Pesho'})).to.equal(undefined,'Function did not return the correct result!');
  });
  it('should return undefined if passed parameter is an array', function () {
    expect(isOddOrEven(['fkdld'])).to.equal(undefined,'Function did not return the correct result!');
  });
  it('should return odd for string with odd lenght ', function () {
    assert.equal(isOddOrEven('one'),'odd','Function did not return the correct result!');
  });
  it('should return even for string with even lenght ', function () {
    isOddOrEven('four').should.equal('even','Function did not return the correct result!');
  });
});
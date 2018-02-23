let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let lookupChar = require("../index").lookupChar;

describe('retrieves a character (a string containing only 1 symbol in JS) at a given index from a passed in string lookupChar(string, index) ', function () {
//check first parameter
  it('should return undefined if first parameter is number(not a string)', function () {
    expect(lookupChar(12,0)).to.equal(undefined,'Function did not return the correct result!');
  });
  it('should return undefined if first parameter is object(not a string)', function () {
    expect(lookupChar({name:'Pesho'},0)).to.equal(undefined,'Function did not return the correct result!');
  });
  it('should return undefined if first parameter is array(not a string)', function () {
    expect(lookupChar(['Pesho'],0)).to.equal(undefined,'Function did not return the correct result!');
  });
//check second parameter
  it('should return undefined if second parameter is a string(not a number)', function () {
    expect(lookupChar('test','12')).to.equal(undefined,'Function did not return the correct result!');
  });
  it('should return undefined if second parameter is a array(not a number)', function () {
    expect(lookupChar('test',[12])).to.equal(undefined,'Function did not return the correct result!');
  });
  it('should return undefined if second parameter is a object(not a number)', function () {
    expect(lookupChar('test',{1:12})).to.equal(undefined,'Function did not return the correct result!');
  });
  it('should return undefined if second parameter is a float number', function () {
    expect(lookupChar('test',1.12)).to.equal(undefined,'Function did not return the correct result!');
  });

  //check index in range
  it('should return Incorrect index if index is neggative', function () {
    expect(lookupChar('test',-3)).to.equal('Incorrect index','Function did not return the correct result!');
  });
  it('should return Incorrect index if index is bigger than string length', function () {
    expect(lookupChar('test',6)).to.equal('Incorrect index','Function did not return the correct result!');
  });
  it('should return Incorrect index if index is equal to string length', function () {
    expect(lookupChar('test',4)).to.equal('Incorrect index','Function did not return the correct result!');
  });

  //chekc for correct result
  it('should return correct value with correct parameters ', function () {
    expect(lookupChar('test',0)).to.equal('t','Function did not return the correct result!');
  });
  it('should return correct value with correct parameters ', function () {
    expect(lookupChar('test',2)).to.equal('s','Function did not return the correct result!');
  });
});


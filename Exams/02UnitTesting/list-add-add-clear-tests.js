let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let makeList = require("../index").makeList;

describe("makeList", function () {
    let list = {};
    beforeEach(function () {
      list = makeList();
    });
  
    it("should be empty on initialization", function () {
      expect(list.toString()).to.equal("");
    });
    it("should contain methods addLeft, addRight, clear, toString", function () {
      expect(list.addLeft).to.exist;
      expect(list.addRight).to.exist;
      expect(list.clear).to.exist;
      expect(list.toString).to.exist;
    });
    it("should successfully add left items of any type", function () {
      list.addLeft({ name: 'pesho', age: 28 });
      list.addLeft(3.14);
      list.addLeft("pesho");
      list.addLeft(5);
      expect(list.toString()).to.equal("5, pesho, 3.14, [object Object]");
    });
    it("should successfully add right items of any type", function () {
      list.addRight(5);
      list.addRight("pesho");
      list.addRight(3.14);
      list.addRight({ name: 'pesho', age: 28 });
  
      expect(list.toString()).to.equal("5, pesho, 3.14, [object Object]");
    });
  
    it("should clear correctly", function () {
      list.addLeft(5);
      list.addRight(7);
      list.addLeft("pesho");
      list.clear();
      expect(list.toString()).to.equal("");
    });
  
    it("should add left and right correctly", function () {
      list.addLeft(5);
      list.addRight(7);
      list.addLeft(8);
  
      expect(list.toString()).to.equal("8, 5, 7");
    });
  });
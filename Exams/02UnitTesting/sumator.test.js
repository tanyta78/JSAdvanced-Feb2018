let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let Sumator = class Sumator {
  constructor() {
    this.data = [];
  }
  add(item) {
    this.data.push(item);
  }
  sumNums() {
    let sum = 0;
    for (let item of this.data)
      if (typeof (item) === 'number')
        sum += item;
    return sum;
  }
  removeByFilter(filterFunc) {
    this.data = this.data.filter(x => !filterFunc(x));
  }
  toString() {
    if (this.data.length > 0)
      return this.data.join(", ");
    else
      return '(empty)';
  }
};

describe('sumator tests', function () {
  let sumator;
  beforeEach(function () {
    sumator = new Sumator();
  });
  describe('initialze tests', function () {
    it('should have property data', function () {
      expect(sumator.hasOwnProperty('data')).to.equal(true, "Missing data property");
    });
    it('must initialize data to an empty array', function () {
      expect(sumator.data instanceof Array).to.equal(true, 'Data must be of type array');
      expect(sumator.data.length).to.equal(0, 'Data array must be initialized empty');
    });

    it('has functions attached to prototype', function () {
      expect(Object.getPrototypeOf(sumator).hasOwnProperty('add')).to.equal(true, "Missing append function");
      expect(Object.getPrototypeOf(sumator).hasOwnProperty('sumNums')).to.equal(true, "Missing prepend function");
      expect(Object.getPrototypeOf(sumator).hasOwnProperty('removeByFilter')).to.equal(true, "Missing insertAt function");
      expect(Object.getPrototypeOf(sumator).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });
  });

  describe('add item tests', function () {
    it('should work correctly with string input', function () {
      sumator.add('str');
      expect(sumator.data.length).to.be.equal(1, 'Do not add correctly');
      expect(sumator.data[0]).to.be.equal('str', 'Do not add correctly');
    });

    it('should work correctly with number input', function () {
      sumator.add(3);
      expect(sumator.data.length).to.be.equal(1, 'Do not add correctly');
      expect(sumator.data[0]).to.be.equal(3, 'Do not add correctly');
    });

    it('should work correctly with multiple add  input', function () {
      sumator.add(3);
      expect(sumator.data.length).to.be.equal(1, 'Do not add correctly');
      sumator.add(4);
      expect(sumator.data.length).to.be.equal(2, 'Do not add correctly');
      sumator.add([1, 2, 3]);
      expect(sumator.data.length).to.be.equal(3, 'Do not add correctly');
      sumator.add('arr');
      expect(sumator.data.length).to.be.equal(4, 'Do not add correctly');
      expect(sumator.data[3]).to.be.equal('arr', 'Do not add correctly');
    });

  });

  describe('sumNums tests', function () {
    it('returns 0 when empty', function () {
      expect(sumator.sumNums()).to.equal(0, "Incorrect sum when empty");
    });
    it('should return sum number with numbers input', function () {
      sumator.add(1);
      sumator.add(1);
      sumator.add(1);
      expect(sumator.sumNums()).to.be.equal(3, 'Do not sum correctly');
    });

    it('correctly filters non-numbers when summing', function () {
      sumator.add('1');
      sumator.add(3);
      sumator.add('1');
      expect(sumator.sumNums()).to.be.equal(3, 'Do not sum corectly');
    });

    it('should return number with sumNums()', function () {
      sumator.add('1');
      sumator.add('1');
      sumator.add('1');
      expect(sumator.sumNums()).to.be.a('number');
    });

    it('correctly filters non-numbers when summing', function () {
      sumator.add(4);
      sumator.add('pesho');
      sumator.add([1, 2, 3]);
      expect(sumator.sumNums()).to.equal(4, "Didn't filter sum");
    });

    it('should return sum number with numbers input', function () {
      sumator.add(1);
      sumator.add(2);
      sumator.add(3);
      sumator.add('drama');
      sumator.add('tron');
      expect(sumator.sumNums()).to.be.equal(6, 'Do not sum corectly');
    });

    it('should return sum number with numbers input', function () {
      sumator.add(1);
      sumator.add(2);
      sumator.add(3);
      sumator.add('3');
      sumator.add('1');
      expect(sumator.sumNums()).to.be.equal(6, 'Do not sum corectly');
    });
  });

  describe('removeByFilter', function () {
    it('should remove items that match function criteria(when add 1,2,3,4,"4","2" and remove even number it should not remove"4 " and "2")', function () {
      sumator.add(1);
      sumator.add(2);
      sumator.add(3);
      sumator.add(4);
      sumator.add("4");
      sumator.add("2");
      sumator.removeByFilter(x => x % 2 == 0);
      expect(sumator.data.length).to.be.equal(4, 'Not filter correctly');

    });

    it('removes all matching elements', function () {
      sumator.add(4);
      sumator.add('pesho');
      sumator.add(4);
      sumator.removeByFilter((e) => e === 4);
      expect(sumator.data).to.not.contains(4, "Element not removed");
  });

    it('should remove items that match function criteria', function () {
      sumator.add(1);
      sumator.add(2);
      sumator.add(3);
      sumator.add(4);
      sumator.add('tre');
      sumator.add('2tre');
      sumator.removeByFilter(x => x % 2 == 0);
      expect(sumator.data.length).to.be.equal(4, 'Not filter correctly');

    });
  });

  describe('toString', function () {
    it('it should return the string "(empty)" when there are no items stored', function () {
      expect(sumator.toString()).to.be.equal('(empty)', 'Not stringify correctly');
    });
    it('should  returns a string, containing a list of all items from the data', function () {
      sumator.add(1);
      sumator.add(0);
      sumator.add(3);
      sumator.add(-2.3);
      sumator.add('four');
      expect(sumator.toString()).to.be.equal('1, 0, 3, -2.3, four', 'Not stringify correctly');

    });
  });
});

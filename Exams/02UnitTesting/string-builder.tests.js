let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let StringBuilder = class StringBuilder {
  constructor(string) {
    if (string !== undefined) {
      StringBuilder._vrfyParam(string);
      this._stringArray = Array.from(string);
    } else {
      this._stringArray = [];
    }
  }

  append(string) {
    StringBuilder._vrfyParam(string);
    for (let i = 0; i < string.length; i++) {
      this._stringArray.push(string[i]);
    }
  }

  prepend(string) {
    StringBuilder._vrfyParam(string);
    for (let i = string.length - 1; i >= 0; i--) {
      this._stringArray.unshift(string[i]);
    }
  }

  insertAt(string, startIndex) {
    StringBuilder._vrfyParam(string);
    this._stringArray.splice(startIndex, 0, ...string);
  }

  remove(startIndex, length) {
    this._stringArray.splice(startIndex, length);
  }

  static _vrfyParam(param) {
    if (typeof param !== 'string') throw new TypeError('Argument must be string');
  }

  toString() {
    return this._stringArray.join('');
  }
};

describe("string builder", function () {
  let str;
  beforeEach(function () {
    str = new StringBuilder();
  });

  describe('initial tests', function () {

    it("should contain methods append, prepend, insertAt, remove, toString", function () {
      expect(str.append).to.exist;
      expect(str.prepend).to.exist;
      expect(str.insertAt).to.exist;
      expect(str.remove).to.exist;
      expect(str.toString).to.exist;
    });

    it('has all properties', function () {
      expect(str.hasOwnProperty('_stringArray')).to.equal(true, "Missing _stringArray property");
    });

    it('has functions attached to prototype', function () {
      expect(Object.getPrototypeOf(str).hasOwnProperty('append')).to.equal(true, "Missing append function");
      expect(Object.getPrototypeOf(str).hasOwnProperty('prepend')).to.equal(true, "Missing prepend function");
      expect(Object.getPrototypeOf(str).hasOwnProperty('insertAt')).to.equal(true, "Missing insertAt function");
      expect(Object.getPrototypeOf(str).hasOwnProperty('remove')).to.equal(true, "Missing remove function");
      expect(Object.getPrototypeOf(str).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });

    it('must initialize data to an empty array', function () {
      expect(str._stringArray instanceof Array).to.equal(true, 'Data must be of type array');
      expect(str._stringArray.length).to.equal(0, 'Data array must be initialized empty');
    });

    it('must initialize data to an empty array', function () {
      expect(str._stringArray instanceof Array).to.equal(true, 'Data must be of type array');
      expect(str._stringArray.length).to.equal(0, 'Data array must be initialized empty');
    });

    it("should be empty on initialization without anything", function () {
      expect(str.toString()).to.equal("");
    });

    it("should be equal to string argument passed on initialization", function () {
      str = new StringBuilder('proba');
      expect(str.toString()).to.equal("proba");
    });
  });

  describe('toString tests', function () {
    it('stringifies correctly', function () {
      str = new StringBuilder('hello');
      expect(str.toString()).to.equal('hello');
    });
  });

  describe('append string tests', function () {

    it('should work correctly on append string', function () {
      str.append('proba');
      expect(str.toString()).to.be.equal('proba', 'Do not append correctly');
    });

    it('should work correctly on multiple append string', function () {
      str.append('proba1');
      str.append('proba2');
      str.append('proba3');
      expect(str.toString()).to.be.equal('proba1proba2proba3', 'Do not append correctly');
    });

    it('should throw TypeError on append without anything', function () {
      expect(function () { str.append(); }).to.throw(TypeError);
    });

    it('should throw "Argument must be a string" on append without anything', function () {
      expect(function () { str.append(); }).to.throw('Argument must be string', 'Do not throw Error');
    });

    it('should throw "Argument must be a string" on append with number', function () {
      expect(function () { str.append(5); }).to.throw('Argument must be string', 'Do not throw Error');
    });

    it('should throw "Argument must be a string" on append with object', function () {
      expect(function () { str.append({ name: 'proba' }); }).to.throw('Argument must be string', 'Do not throw Error');
    });
  });

  describe('prepend string tests', function () {
    it('should work correctly on prepend string', function () {
      str.prepend('proba');
      expect(str.toString()).to.be.equal('proba', 'Do not preprend correctly');
    });
    it('should work correctly on multiple prepend strings', function () {
      str.prepend('proba1');
      str.prepend('proba2');
      str.prepend('proba3');
      expect(str.toString()).to.be.equal('proba3proba2proba1', 'Do not prepend correctly');
    });
    it('should throw TypeError on preppend without anything', function () {
      expect(function () { str.prepend(); }).to.throw(TypeError);
    });
    it('should throw "Argument must be a string" on prepend without anything', function () {
      expect(function () { str.prepend(); }).to.throw('Argument must be string', 'Do not throw Error');
    });
    it('should throw "Argument must be a string" on prepend with number', function () {
      expect(function () { str.prepend(5); }).to.throw('Argument must be string', 'Do not throw Error');
    });
    it('should throw "Argument must be a string" on prepend with object', function () {
      expect(function () { str.prepend({ name: 'proba' }); }).to.throw('Argument must be string', 'Do not throw Error');
    });
  });

  describe('insertAt string tests', function () {
    it('should work correctly with correct input', function () {
      str.append('aa');
      str.append('bb');
      str.append('cc');
      str.insertAt('000', 1);
      expect(str.toString()).to.be.equal('a000abbcc', 'Do not insert correctly');
    });
    it('should work correctly on multiple insert strings', function () {
      str.append('a');
      str.append('b');
      str.append('c');
      str.insertAt('0', 1);
      str.insertAt('1', 1);
      str.insertAt('2', 1);
      expect(str.toString()).to.be.equal('a210bc', 'Do not insert correctly');
    });

    it('inserts correctly', function () {
      builder = new StringBuilder('hello');
      let str1 = 'kek';
      builder.insertAt(str1, 3);
      let expected = Array.from('hello');
      expected.splice(3, 0, ...str1);
      compareArray(builder._stringArray, expected);
    });
    it('should insert at the beggining on insertAt with negative invalid index', function () {
      str.append('01234');
      str.insertAt('a', -5);
      expect(str.toString()).to.be.equal('a01234', 'Do not insert correctly');
    });
    it('should insert at the end on insertAt with invalid index', function () {
      str.append('01234');
      str.insertAt('a', 7);
      expect(str.toString()).to.be.equal('01234a', 'Do not insert correctly');
    });
    it('should throw TypeError on insertAt without anything', function () {
      expect(function () { str.insertAt(); }).to.throw(TypeError);
    });
    it('should throw TypeError on insertAt with non string input', function () {
      expect(function () { str.insertAt(4, 3); }).to.throw(TypeError);
    });
    it('should throw "Argument must be a string" on insertAt without anything', function () {
      expect(function () { str.insertAt(); }).to.throw('Argument must be string', 'Do not throw Error');
    });
    it('should throw "Argument must be a string" on insertAt with number', function () {
      expect(function () { str.insertAt(4, 3); }).to.throw('Argument must be string', 'Do not throw Error');
    });
    it('should throw "Argument must be a string" on insertAt with object', function () {
      expect(function () { str.insertAt({ name: 'proba' }, 0); }).to.throw('Argument must be string', 'Do not throw Error');
    });
  });

  describe('remove string tests', function () {
    it('should work correctly with correct input', function () {
      str.append('aa');
      str.append('bb');
      str.append('cc');
      str.remove(1, 1);
      expect(str.toString()).to.be.equal('abbcc', 'Do not remove correctly');
    });
    it('should work correctly on multiple remove strings', function () {
      str.append('a');
      str.append('b');
      str.append('c');
      str.remove(0, 1);
      str.remove(1, 1);
      expect(str.toString()).to.be.equal('b', 'Do not remove correctly');
    });
    it('should remove at the beggining on remove with negative invalid index', function () {
      str.append('01234');
      str.remove(-7, 1);
      expect(str.toString()).to.be.equal('1234', 'Do not remove correctly');
    });
    it('should do nothing on remove with invalid index', function () {
      str.append('01234');
      str.remove(7, 1);
      expect(str.toString()).to.be.equal('01234', 'Do not remove correctly');
    });
    it('should do nothing on remove without anything', function () {
      str.append('01234');
      str.remove();
      expect(str.toString()).to.be.equal('01234', 'Do not remove correctly');
    });
    /*
    it('should do nothing on remove with string input', function () {
      str.append('01234');
      str.remove('one',3);
      expect(str.toString()).to.be.equal('01234','Do not remove correctly');
    });
    it('should do nothing on remove with object input', function () {
      str.append('01234');
      str.remove({1:'one'},3);
      expect(str.toString()).to.be.equal('01234','Do not remove correctly');
    });
    */
  });

  function compareArray(source, expected) {
    expect(source.length).to.equal(expected.length, "Arrays don't match");
    for (let i = 0; i < source.length; i++) {
      expect(source[i]).to.equal(expected[i], 'Element ' + i + ' mismatch');
    }
  }
});


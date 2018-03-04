let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let SortedList = require("../index").SortedList;


 describe('list tests', function () {
  let sortedList;
  beforeEach(function () {
    sortedList = new SortedList();
  });
  describe('initialze tests', function () {
    it('should have property list', function () {
      expect(sortedList.hasOwnProperty('list')).to.equal(true, "Missing data property");
    });
    it('must initialize data to an empty array', function () {
      expect(sortedList.list instanceof Array).to.equal(true, 'Data must be of type array');
      expect(sortedList.list.length).to.equal(0, 'Data array must be initialized empty');
    });

    it('has functions attached to prototype', function () {
      expect(Object.getPrototypeOf(sortedList).hasOwnProperty('add')).to.equal(true, "Missing add function");
      expect(Object.getPrototypeOf(sortedList).hasOwnProperty('remove')).to.equal(true, "Missing remove function");
      expect(Object.getPrototypeOf(sortedList).hasOwnProperty('get')).to.equal(true, "Missing get function");
    });
  });

  describe('add item tests', function () {
 
    it('should work correctly with number input', function () {
      sortedList.add(3);
      expect(sortedList.list.length).to.be.equal(1, 'Do not add correctly');
      expect(sortedList.list[0]).to.be.equal(3, 'Do not add correctly');
    });

    it('should work correctly with multiple add input', function () {
      sortedList.add(3);
      expect(sortedList.list.length).to.be.equal(1, 'Do not add correctly');
      sortedList.add(4);
      expect(sortedList.list.length).to.be.equal(2, 'Do not add correctly');
      sortedList.add([1, 2, 3]);
      expect(sortedList.list.length).to.be.equal(3, 'Do not add correctly');
      sortedList.add('arr');
      expect(sortedList.list.length).to.be.equal(4, 'Do not add correctly');
      expect(sortedList.list[3]).to.be.equal('arr', 'Do not add correctly');
    });

    it('when add shoul keeps the elements of the collection sorted ', function () {
        sortedList.add(1);
        sortedList.add(3);
        sortedList.add(4);
        sortedList.add(-1);
        sortedList.add(0);
        let result=sortedList.list;
        expect(result+'').to.be.equal('-1,0,1,3,4', 'Do not sort correctly when additing');
      });

  });

  describe('remove tests', function () {
    
    it('should remove element on valid index', function () {
      sortedList.list=[1,2,4,5,6,11];  
      sortedList.remove(1);
      let result=sortedList.list;
      expect(result+'').to.be.equal('1,4,5,6,11', 'Do not remove correctly');
    });

    it('should throw an Error on remove element on invalid index -1', function () {
        sortedList.list=[1,2,4,5,6,11];  
        expect(function () { sortedList.remove(-1);}).to.throw(Error);
    });

    it('should throw an "Index was outside the bounds of the collection." on remove element on invalid index -1', function () {
        sortedList.list=[1,2,4,5,6,11];  
        expect(function () { sortedList.remove(-1);}).to.throw('Index was outside the bounds of the collection.', 'Do not throw Error');
    });

    it('should throw an Error on remove element on invalid index 6', function () {
        sortedList.list=[1,2,4,5,6,11];  
        expect(function () { sortedList.remove(6);}).to.throw(Error);
    });

    it('should throw an "Index was outside the bounds of the collection." on remove element on invalid index 6', function () {
        sortedList.list=[1,2,4,5,6,11];  
        expect(function () { sortedList.remove(6);}).to.throw('Index was outside the bounds of the collection.', 'Do not throw Error');
    });

    it('should throw an Error on remove element on empty collection', function () {
        sortedList.list=[];  
        expect(function () { sortedList.remove(0);}).to.throw(Error);
    });

    it('should throw an "Collection is empty." on remove element on empty collection', function () {
        sortedList.list=[];  
        expect(function () { sortedList.remove(0);}).to.throw("Collection is empty.", 'Do not throw Error');
    });
   
  });

  describe('get(index) tests', function () {
    it('it should  return the value of the element at validposition index', function () {
      sortedList.list=[0,2,4,5,6];
      expect(sortedList.get(1)).to.be.equal(2, 'Not return correct value');
    });
    
    it('should throw an Error on get(index) element on invalid index -1', function () {
        sortedList.list=[1,2,4,5,6,11];  
        expect(function () { sortedList.get(-1);}).to.throw(Error);
    });

    it('should throw an "Index was outside the bounds of the collection." on get(index) element on invalid index -1', function () {
        sortedList.list=[1,2,4,5,6,11];  
        expect(function () { sortedList.get(-1);}).to.throw('Index was outside the bounds of the collection.', 'Do not throw Error');
    });

    it('should throw an Error on get(index) element on invalid index 6', function () {
        sortedList.list=[1,2,4,5,6,11];  
        expect(function () { sortedList.get(6);}).to.throw(Error);
    });

    it('should throw an "Index was outside the bounds of the collection." on get(index) element on invalid index 6', function () {
        sortedList.list=[1,2,4,5,6,11];  
        expect(function () { sortedList.get(6);}).to.throw('Index was outside the bounds of the collection.', 'Do not throw Error');
    });

    it('should throw an Error on get(index) element on empty collection', function () {
        sortedList.list=[];  
        expect(function () { sortedList.get(0);}).to.throw(Error);
    });

    it('should throw an "Collection is empty." on get(index) element on empty collection', function () {
        sortedList.list=[];  
        expect(function () { sortedList.get(0);}).to.throw("Collection is empty.", 'Do not throw Error');
    });
   

  });

  describe('get size() tests',function(){
    it('it should  returns the number of elements inside the collection', function () {
        sortedList.list=[0,2,4,5,6];
        expect(sortedList.size).to.be.equal(5, 'Not return correct value');
      });
  });
  
});



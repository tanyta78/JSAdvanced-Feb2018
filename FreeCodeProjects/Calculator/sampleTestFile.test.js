let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
//iffi cant be reset befor each
/*let list = (function () {
    let data = [];
    return {
        add: function (item) {
            data.push(item);
        },
        delete: function (index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function () {
            return data.join(", ");
        }
    };
})();
*/
/*
  describe('list', function () {
   
    it("should add data of any type", function () {
        list.add(5);
        list.add("pesho");
        list.add(true);
        expect(list.toString()).to.equal("5, pesho, true");
    });
    it("should correctly delete data with correct index", function () {
        list.add(5);
        list.add("pesho");
        list.add(true);
        list.delete(1);
        expect(lis.toString()).to.equal("5, true");
    });
    it("should return correct data for remove at valid index", function () {
        lis.add(5);
        lis.add("pesho");
        lis.add(true);
        expect(lis.delete(1)).to.equal("pesho");
    });
    it("should return undefined if deleting non-integer index", function () {
        lis.add(5);
        lis.add("pesho");
        lis.add(true);
        expect(lis.delete(3.14)).to.equal(undefined);
    });
    it("should return undefined on attempt to delete negative index", function () {
        lis.add(5);
        lis.add("pesho");
        lis.add(true);
        expect(lis.delete(-2)).to.equal(undefined);
    });
    it("should return undefined on attempt to delete non-existing index", function () {
        lis.add(5);
        lis.add("pesho");
        lis.add(true);
        expect(lis.delete(5)).to.equal(undefined);
    });
    it("should correctly print data", function () {
        let array = [5, "gosho", true, false, 3.15];
        array.forEach(el => lis.add(el));
        expect(lis.toString()).to.equal(array.join(", "));
    });
}); 
*/
//to create before each we make iffe to regular function
function produseList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item);
        },
        delete: function (index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function () {
            return data.join(", ");
        }
    };
};
describe('list tests', function () {
    let list = {};
    beforeEach(function () {
        list = produseList();
    });
    describe('initialze tests', function () {
        it("should be empty on initialization", function () {
            expect(list + '').to.equal("");
        });
        it("should contain methods add, delete, toString", function () {
            expect(list.add).to.exist;
            expect(list.delete).to.exist;
            expect(list.toString).to.exist;
            expect(typeof(list.add)).to.equal('function');
            expect(typeof(list.delete)).to.equal('function');expect(typeof(list.toString)).to.equal('function');
        });
    });

    describe('add item tests', function () {

        it('should work correctly with number input', function () {
            list.add(3);
            let data = (list + '').split(', ');

            expect(data.length).to.be.equal(1, 'Do not add correctly');
            expect(data[0]).to.be.equal('3', 'Do not add correctly');
        });

        it('should appends given item to the end of the list with multiple add input', function () {
            list.add(3);
            let data = (list + '').split(', ');
            expect(data.length).to.be.equal(1, 'Do not add correctly');
            list.add(4);
            data = (list + '').split(', ');
            expect(data.length).to.be.equal(2, 'Do not add correctly');
            list.add([1, 2, 3]);
            data = (list + '').split(', ');
            expect(data.length).to.be.equal(3, 'Do not add correctly');
            list.add('arr');
            data = (list + '').split(', ');
            expect(data.length).to.be.equal(4, 'Do not add correctly');
            expect(data[3]).to.be.equal('arr', 'Do not add correctly');
        });

    });

    describe('delete tests', function () {
        it('should delete element on valid index', function () {
            list.add(1);
            list.add(2);
            list.add(4);
            list.add(6);
            list.add(11);

            list.delete(1);

            expect(list + '').to.be.equal('1, 4, 6, 11', 'Do not delete correctly');
        });

        it('should return element value on delete element on valid index 1', function () {
            list.add(1);
            list.add(2);
            list.add(4);
            list.add(6);
            list.add(11);

            expect(list.delete(1)).to.be.equal(2, 'Do not return value when delete');
        });

        it('should return undefined on delete element on invalid index -1', function () {
            list.add(1);
            list.add(2);
            list.add(4);
            list.add(6);
            list.add(11);

            //   list.delete(-1);
            expect(list.delete(-1)).to.be.undefined;
        });

        it('should return undefined on delete element on invalid index 5', function () {
            list.add(1);
            list.add(2);
            list.add(4);
            list.add(6);
            list.add(11);

            expect(list.delete(5)).to.be.undefined;
        });

    });

});



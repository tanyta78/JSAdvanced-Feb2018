let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

describe('sharedObject', function () {
    before(() => global.$ = $);

    //check for properties initial state
    describe('initial name and income should be null', function () {
        it("should return null for initial state of name", function () {
            expect(sharedObject.name).to.be.null;
        });
        it("should return null for initial state of income", function () {
            expect(sharedObject.income).to.be.null;
        });

    });
    //check change name function
    describe("change name function", function () {
        it("should return null for empty string parameter", function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it("should not be null for not empty string parameter", function () {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho', 'Name should not changed correctly');
        });
    });
    describe('Name input tests', function () {
        it("should return null for empty string parameter", function () {
            sharedObject.changeName('Goshko');
            sharedObject.changeName('');
            let nameTxtVal=$('#name');
            expect(nameTxtVal.val()).to.be.equal('Goshko','Name did not change correctly');
        });
        it("should not be null for not empty string parameter", function () {
            sharedObject.changeName('Pesho');
            let nameTxtVal=$('#name');
            expect(nameTxtVal.val()).to.be.equal('Pesho', 'Name should not changed correctly');
        });
    });
    //check change input function
    describe('changeIncome tests',function(){
        it('with a string should stay null',function(){
            sharedObject.changeIncome('f');
            expect(sharedObject.income).to.be.null;
        });
        it('with a positive number should change correctly',function(){
            sharedObject.changeIncome(5);    
            expect(sharedObject.income).to.be.equal(5,'Income did not change correctly');
        });
        it('with a floating point',function(){
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.11);            
            expect(sharedObject.income).to.be.equal(5,'Income did not change correctly');
        });
        it('with a negative number',function(){
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-6);            
            expect(sharedObject.income).to.be.equal(5,'Income did not change correctly');
        });
        it('with a zero ',function(){
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);            
            expect(sharedObject.income).to.be.equal(5,'Income did not change correctly');
        });
    });
    describe('Income input tests',function(){
        it('with a string should not change correctly',function(){
            sharedObject.changeIncome(5);
            sharedObject.changeIncome('f');
            let incomeTxt=$('#income');
            expect(incomeTxt.val()).to.be.equal('5','Income input did not change correctly');
        });
        it('with a positive number should  change correctly',function(){
            sharedObject.changeIncome(5);
            let incomeTxt=$('#income');
            expect(incomeTxt.val()).to.be.equal('5','Income input did not change correctly');
        });
        it('with a floating point number should not change correctly',function(){
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(1.23);
            let incomeTxt=$('#income');
            expect(incomeTxt.val()).to.be.equal('5','Income input did not change correctly');
        });
        it('with a stnegativering should not change correctly',function(){
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-3);
            let incomeTxt=$('#income');
            expect(incomeTxt.val()).to.be.equal('5','Income input did not change correctly');
        });
        it('with a string should not change correctly',function(){
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            let incomeTxt=$('#income');
            expect(incomeTxt.val()).to.be.equal('5','Income input did not change correctly');
        });
    });
    //updateName tests
    describe('update name tests',function(){
        it('with an empty string should not change property',function(){
           //preexisting value
            sharedObject.changeName('Viktor');
            let nameEl=$('#name');
            nameEl.val('');
            sharedObject.updateName('');
            expect(sharedObject.name).to.be.equal('Viktor','Update name did not work correctly');
        });
        it('with an non empty string should change property',function(){
            //preexisting value
             sharedObject.changeName('Viktor');
             let nameEl=$('#name');
             nameEl.val('Kiril');
             sharedObject.updateName('');
             expect(sharedObject.name).to.be.equal('Kiril','Update name did not work correctly');
         });
    });
    //updateIncome tests
    describe('update income tests',function(){
        it('with an a string should not change income property',function(){
           //preexisting value
            sharedObject.changeIncome(5);
            let incomeEl=$('#income');
            incomeEl.val('newincome');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5,'Update income did not work correctly');
        });
        it('with a floating point number should not change property',function(){
            sharedObject.changeIncome(5);
            let incomeEl=$('#income');
            incomeEl.val('1.23');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5,'Update income did not work correctly');
         });
         it('with a negative number should not change property',function(){
            sharedObject.changeIncome(5);
            let incomeEl=$('#income');
            incomeEl.val('-3');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5,'Update income did not work correctly');
         });
         it('with a zero number should not change property',function(){
            sharedObject.changeIncome(5);
            let incomeEl=$('#income');
            incomeEl.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5,'Update income did not work correctly');
         });
         it('with a positive number should change property',function(){
            sharedObject.changeIncome(5);
            let incomeEl=$('#income');
            incomeEl.val('3');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3,'Update income did not work correctly');
         });
    });
});

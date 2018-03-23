let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let PaymentPackage = class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
};


describe('paymentpackage tests', function () {

    describe('initialze tests', function () {
        let pack;
        beforeEach(function () {
            pack = new PaymentPackage('testName', 2);
        });

        it('should have property name', function () {
            expect(pack.name).to.equal('testName', "Missing name property");
        });
        it('should have property value', function () {
            expect(pack.value).to.equal(2, "Missing value property");
        });
        it('should have property VAT', function () {
            expect(pack.VAT).to.equal(20, "Missing VAT property");
        });

        it('should have property active', function () {
            expect(pack.active).to.equal(true, "Missing active property");
        });

        it('has functions attached to prototype', function () {
            expect(Object.getPrototypeOf(pack).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
        });
    });

    describe('getter and setter tests', function () {
        let pack;
        beforeEach(function () {
            pack = new PaymentPackage('testName', 2);
        });

        it('should have setter for name', function () {
            pack.name = 'NewName';
            expect(pack.name).to.equal('NewName', "Missing setter name property");
        });

        it('should have setter for value', function () {
            pack.value = 200;
            expect(pack.value).to.equal(200, "Missing setter value property");
        });

        it('should have setter for VAT', function () {
            pack.VAT = 10;
            expect(pack.VAT).to.equal(10, "Missing setter VAT property");
        });

        it('should have setter for active', function () {
            pack.active = false;
            expect(pack.active).to.equal(false, "Missing setter active property");
        });
    });
    describe('Accessor name tests', function () {

        it('should check for empty string', function () {
            expect(function () { pack = new PaymentPackage('', 2); }).to.throw('Name must be a non-empty string', 'Do not throw Error');

        });

        it('should check for empty string', function () {
            expect(function () { pack = new PaymentPackage(2); }).to.throw('Name must be a non-empty string', 'Do not throw Error');

        });

        it('should check for empty string', function () {
            expect(function () { pack = new PaymentPackage(2,2); }).to.throw('Name must be a non-empty string', 'Do not throw Error');

        });
        it('should check for empty string', function () {
            expect(function () { pack = new PaymentPackage({name:'trt'},2); }).to.throw('Name must be a non-empty string', 'Do not throw Error');

        });

        it('should check for empty string', function () {
            expect(function () { pack = new PaymentPackage(true,2); }).to.throw('Name must be a non-empty string', 'Do not throw Error');

        });

    });

    describe('Accessor value tests', function () {

        it('should check for value type', function () {
            expect(function () { pack = new PaymentPackage('testName', ''); }).to.throw('Value must be a non-negative number', 'Do not throw Error');

        });

        it('should check for value not be negative', function () {
            expect(function () { pack = new PaymentPackage('testName', -2); }).to.throw('Value must be a non-negative number', 'Do not throw Error');

        });



    });

    describe('Accessor VAT tests', function () {
        let pack;
        beforeEach(function () {
            pack = new PaymentPackage('testName', 2);
        });
        it('should check for VAT type', function () {
            expect(function () { pack.VAT = ''; }).to.throw('VAT must be a non-negative number', 'Do not throw Error');

        });

        it('should check for VAT not be negative', function () {
            expect(function () { pack.VAT = -3; }).to.throw('VAT must be a non-negative number', 'Do not throw Error');

        });



    });

    describe('Accessor active tests', function () {
        let pack;
        beforeEach(function () {
            pack = new PaymentPackage('testName', 2);
        });
        it('should check for active type', function () {
            expect(function () { pack.active = ''; }).to.throw('Active status must be a boolean', 'Do not throw Error');

        });





    });

    describe('toString function tests', function () {
        let pack;
        beforeEach(function () {
            pack = new PaymentPackage('testName', 1500);
        });
        it('should return string', function () {
            let result = pack.toString();
            expect(typeof result).to.be.equal('string', 'Do not return string');

        });
        it('should return correct string', function () {
            let result = pack.toString();
            let expected = `Package: testName\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`;

            expect(result).to.be.equal(expected, 'Do not return correct string');

        });
        it('should return append inactive to string when is needed', function () {
            pack.active = false;
            let result = pack.toString();
            let expected = `Package: testName (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`;

            expect(result).to.be.equal(expected, 'Do not return correct string');

        });




    });

});






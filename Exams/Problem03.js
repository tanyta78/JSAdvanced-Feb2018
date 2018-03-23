class PaymentProcessor {
    constructor(options) {
        this.payments = new Map();
        if (arguments.length) {
            this.options = {};
            this.setOptions(options);
        } else {
            this.options = {
                types: ["service", "product", "other"],
                precision: 2
            };

        }
        this._balance = 0.00;
    }

    registerPayment(id, name, type, value) {
        if (id === '' || this.payments.has(id)) {
            throw Error('Invalid id');
        }
        if (typeof name !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (name.length === 0) {
            throw new Error('Name must be a non-empty string');
        }

        if (typeof value !== 'number') {
            throw new Error('Value must be a  number');
        }

        if (!this.options.types.includes(type)) {
            throw new Error('Invalid type');
        }

        let fixedValue = Number(value).toFixed(this.options.precision);
        this._balance =(Number(this._balance) + Number(fixedValue)).toFixed(this.options.precision);

        let payment = {
            ID: id,
            name: name,
            type: type,
            value: fixedValue,
        };

        this.payments.set(id, payment);
    }

    deletePayment(id) {
        if (!this.payments.has(id)) {
            throw new Error('ID not found');
        }

        this.payments.delete(id);
    }

    get(id) {
        if (!this.payments.has(id)) {
            throw new Error('ID not found');
        }
        let payment = this.payments.get(id);
        let result = `Details about payment ID: ${payment.ID}\n- Name: ${payment.name}\n- Type: ${payment.type}\n- Value: ${payment.value}`;
        return result;

    }

    setOptions(options) {
        if (options.types !== undefined) {
            this.options.types = options.types;
        } else {
            this.options.types = ["service", "product", "other"];
        }

        if (options.precision !== undefined) {
            this.options.precision = options.precision;
        } else {
            this.options.precision = 2;
        }

    }

    toString() {

        let result = `Summary:\n- Payments: ${this.payments.size}\n- Balance: ${this._balance}`;
        return result;

    }
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({ types: ['product', 'material'] });
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({ types: ['service'] });
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({ precision: 5 });
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());

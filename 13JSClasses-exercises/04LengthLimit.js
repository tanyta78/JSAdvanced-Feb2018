class Stringer {
    constructor(str, len) {
        this.innerString = str;
        this.innerLength = len;
    }

    increase(length) {
        this.innerLength += length;
        if (this.innerLength < 3) {
            this.innerLength = 0;
        }
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 3) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerString == 0) return '...';
        if (this.innerString.length > this.innerLength){
            this.innerString = this.innerString.substr(0, this.innerLength) + '...';
            return this.innerString;
        } 
    }
}

let test = new Stringer('Test', 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test

class Stringero {
    constructor(str, len) {
        this.innerString = str;
        this.innerLength = len;
    }
    get innerLength() {
        return this._innerLength;
    }

    set innerLength(value) {
        if (value < 0) {
            this._innerLength = 0;
        } else {
            this._innerLength = value;
        }
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
    }


    toString() {
        if (this.innerString == 0) return '...';
        if (this.innerString.length <= this.innerLength) {
           return this.innerString;
        } 
        
        return this.innerString.substring(0, this.innerLength) + '...';
    }
}

test = new Stringero('Test', 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test

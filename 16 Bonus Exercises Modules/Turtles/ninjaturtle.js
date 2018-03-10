let Turtle=require('./turtle');
//import {Turtle} from './turtle';
class NinjaTurtle extends Turtle {
    constructor(name, age, gender, maskColor, weapon) {
        super(name, age, gender);
        this.maskColor = maskColor;
        this.weapon = weapon;
        this._level = 0;
    }

    get level(){
        return this._level;
    }

    grow(age) {
        super.grow(age);
        this.level += age;
    }

    toString() {
        let result = super.toString();
        let letters=this.name.substring(0, 3);
        if (this.level < 25) {
            result += `${letters} wears a ${this.maskColor} mask, and is an apprentice with the ${this.weapon}.`;
        }

        if (this.level >= 25 && this.level < 100) {
            result += `${letters} wears a ${this.maskColor} mask, and is smokin strong with the ${this.weapon}.`;
        }

        if (this.level >= 100) {
            result += `${letters} wears a ${this.maskColor} mask, and is BEYOND GODLIKE with the ${this.weapon}.`;
}

        return result;
    }
}

module.exports=NinjaTurtle;
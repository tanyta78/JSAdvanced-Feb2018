//import {Turtle} from './turtle';
let Turtle=require('./turtle');

class EvkodianTurtle extends Turtle {
    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);
        this.evkodiumValue = evkodiumValue;
        this._evkodium={};
    }

    get evkodium() {
        this._evkodium.value = this.evkodiumValue;
      this._evkodium.density = this.gender == "male" ? this.age * 3 : this.age * 2;

        return this._evkodium;
    }

    toString() {
        return super.toString() + `Evkodium: ${this.evkodium.value * this.evkodium.density}`;
    }
}

module.exports=EvkodianTurtle;
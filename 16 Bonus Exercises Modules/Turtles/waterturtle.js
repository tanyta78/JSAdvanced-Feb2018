let Turtle=require('./turtle');

//import {Turtle} from './turtle';

class WaterTurtle extends Turtle {
    constructor(name, age, gender, waterPool) {
        super(name, age, gender);
        this._currentWaterPool = waterPool;
    }

    get currentWaterPool() {
        return this._currentWaterPool;
    }
    travel(waterPool) {
        this._currentWaterPool = waterPool;
       this.grow(5);
    }

    toString() {
        return super.toString() + `Currently inhabiting ${this.currentWaterPool}`;
    }
}
module.exports=WaterTurtle;
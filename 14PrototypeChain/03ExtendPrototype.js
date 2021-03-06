class Person {
    constructor(name, email) {
        this.email = email;
        this.name = name;
    }

    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }

    toString() {
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, subject: ${this.subject})`;
    }
}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }

    toString() {
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, course: ${this.course})`;
    }
}

let person=new Person('Maria','mm@abv.bg');
let teacher = new Teacher('Ivan','ii@fff.ghj','History');
let student=new Student('Pesho','pp@pp.aa','JS');

function extendClass(classToExtend) {
   classToExtend.prototype.species='Human';
   classToExtend.prototype.toSpeciesString=function(){
       return `I am a ${this.species}. ${this.toString()}`;
   };
   
}



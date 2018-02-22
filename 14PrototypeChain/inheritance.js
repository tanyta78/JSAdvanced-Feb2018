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

console.log('Object.getPrototypeOf(teacher)'+Object.getPrototypeOf(teacher));
console.log('Teacher.prototype'+Teacher.prototype);
console.log('teacher.age: '+teacher.age);
Teacher.prototype.age=21;
console.log('teacher.age: '+teacher.age);
console.log('person.age: '+person.age);
Person.prototype.age=33;
console.log('teacher.age: '+teacher.age);
console.log('person.age: '+person.age);






//module.exports = { createCalculator };
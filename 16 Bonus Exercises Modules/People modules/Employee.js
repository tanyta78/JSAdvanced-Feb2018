export class Employee{
    constructor (name,age) {
        this.name=name;
        this.age=age;
        this.salary=0;
        this.tasks=[];
    }

    work(){
        let task=this.tasks.shift();
        console.log(this.name+task);
        this.tasks.push(task);
    }

    collectSalary(){
        console.log(`${this.name} received ${this.getSalary()} this month.`);
        
    }

    getSalary(){
        return this.salary;
    }
}
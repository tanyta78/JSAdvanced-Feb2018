export class Branch {
    constructor(id, branchName, companyName) {
        this.id = id;
        this.branchName = branchName;
        this.companyName = companyName;
        this._employees = [];
    }
    get branchName() {
        return this._branchName;
    }
    set branchName(value) {
        this._branchName = value;
    }
    get companyName() {
        return this._companyName;
    }
    set companyName(value) {
        this._companyName = value;
    }
    get employees() {
        return this._employees;
    }

    hire(employee) {
        this._employees.push(employee);
    }

    toString(){
        let result=`@ ${this.companyName}, ${this.branchName}, ${this.id}\n`;
        result+='Employed:\n';
        if(this.employees.length==0){
            result+='None...\n';
        }else{
            result+=this.employees.map(e=>`** ${e}`).join('\n');
        }
        return result;
    }
}



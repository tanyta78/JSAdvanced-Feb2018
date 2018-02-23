function solve(name,age,weight,height) {
    let person={};
    person.name=name;
    person.personalInfo={};
    person.personalInfo.age=age;
    person.personalInfo.weight=weight;
    person.personalInfo.height=height;
    let bmi=weight/((height/100)*(height/100));
    person.BMI=Math.round(bmi);
    let status;
    // obj.status = obj.BMI < 18.5 ? "underweight" : obj.BMI < 25 ? "normal" : obj.BMI < 30 ? "overweight" : "obese";
    if (bmi<18.5) {
        status='underweight';
    }else if(bmi<25){
        status='normal';
    }else if(bmi<30){
        status='overweight';
    }else if(bmi>30){
        status='obese';
    }
    person.status=status;
    if(status=='obese'){
        person.recommendation='admission required';
    }

    return person;
}

console.log(solve('Peter', 29, 75, 182));
console.log(solve('Honey Boo Boo', 9, 57, 137));
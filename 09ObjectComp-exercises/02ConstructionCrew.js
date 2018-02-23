function modifyWorker(obj){
    if(obj.handsShaking==true){
        obj.bloodAlcoholLevel+=0.1*obj.weight*obj.experience;
        obj.handsShaking=false;
    }
    return obj;
}
function solve(arr){
    //return arr.map(Number).reduce((a,b)=>a<b?b:a);
    return Math.max.apply(null,arr);
}
function subsum(arr,startIndex,endIndex) {
    let sum=0;
    if(!(arr instanceof Array)){
        return NaN;
    }
    if(startIndex<0){
        startIndex=0;
    }
    let arrLength=arr.length;
    if(endIndex>arrLength-1){
        endIndex=arrLength-1;
    }
    for (let index = startIndex; index <= endIndex; index++) {
        let element = Number(arr[index]);
        sum+=element;
        
    }
    return sum;
}
let result =subsum('text', 0, 2);
//subsum([], 1, 2) 0
//subsum([10, 'twenty', 30, 40], 0, 2);NaN
//subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);3.3
//subsum([10, 20, 30, 40, 50, 60], 3, 300); 150
console.log(result);

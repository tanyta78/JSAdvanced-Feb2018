function aggragate(arr) {

    console.log(`Sum = ${reduser(arr, (a, b) => Number(a) + Number(b))}`);
    console.log(`Min = ${reduser(arr, (a, b) => a > b ? b : a)}`);
    console.log(`Max = ${reduser(arr, (a, b) => a > b ? a : b)}`);
    console.log(`Product = ${reduser(arr, (a, b) => Number(a) * Number(b))}`);
    console.log(`Join = ${reduser(arr, (a, b) => '' + a + b)}`);


    function reduser(arr, func) {
        let result = arr[0];
        for (let element of arr.slice(1)) {
            result = func(result, element);

        }
        return result;
    }
}

aggragate([5, -3, 20, 7, 0.5]);
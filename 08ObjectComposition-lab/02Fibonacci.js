
//First
function getFibonator() {
    let f1 = 0;
    let f2 = 1;
    return function getNextFib() {
        let f3 = f1 + f2;
        [f1, f2] = [f2, f3];
        console.log(f1);

    }

}

let fib = getFibonator();

fib();
fib();
fib();
fib();
//Second
function solve(n) {
    let fibNums = [];
    let fib = function getFibonator() {
        let f1 = 0;
        let f2 = 1;
        return function getNextFib() {
            let f3 = f1 + f2;
            [f1, f2] = [f2, f3];
            return f1;
        }

    }();

    for (let i = 0; i < n; i++) {
        fibNums.push(fib());

    }

    return fibNums;
}

solve(5);
//judge
function getFibonator() {
    let f1 = 0;
    let f2 = 1;
    return function getNextFib() {
        let f3 = f1 + f2;
        [f1, f2] = [f2, f3];
        return f1;
    }
}
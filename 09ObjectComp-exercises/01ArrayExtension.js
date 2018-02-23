//To test our program in the Judge, we need to wrap it in an IIFE
(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };
    Array.prototype.take = function (n) {
        return this.slice(0, n + 1);
    };
    Array.prototype.sum = function () {
        let result = 0;
        for (let i = 0; i < this.length; i++) {
            result += this[i];
        }
        return result;
    };
    Array.prototype.average = function () {
        let sum = this.sum();
        return sum / this.length;
    };
})();
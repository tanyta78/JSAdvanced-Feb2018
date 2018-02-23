//Your main code should be structured as an IIFE without input or output – it should modify the existing String prototype instead.

(() => {
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return this.replace(/^/, str).toString();
        }
        return this.toString();
    };
    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return this.replace(/$/, str).toString();
        }
        return this.toString();
    };
    String.prototype.isEmpty = function () {
        return this.length == 0 ? true : false;
    };
    String.prototype.truncate = function (n) {
        let result = '';
        let len = this.length;
        if (n <= 3) return '.'.repeat(n);

        if (len <= n) return this.toString();

        let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
        if (lastIndex != -1) {
            return this.toString().substr(0, lastIndex) + "...";
        } else {
            return this.toString().substr(0, n - 3) + "...";
        }
    };
    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            let index = str.indexOf("{" + i + "}");
            while (index != -1) {
                str = str.replace("{" + i + "}", params[i]);
                index = str.indexOf("{" + i + "}");
            }
        }
        return str;
    };
})();

// let str = 'my string';
// str = str.ensureStart('my');
// console.log(str);
// str = str.ensureStart('hello ');
// console.log(str);
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
// console.log(str);
// str = String.format('jumps {0} {1}',
//     'dog');
// console.log(str);

var test = 'the quick brown fox jumps over the lazy dog';
console.log(test.truncate(10));
//expect(testString.truncate(10)).to.equal('the...', 'Incorrect truncate() functionality 1');
console.log(test.truncate(25));
//expect(testString.truncate(25)).to.equal('the quick brown fox...', 'Incorrect truncate() functionality 2');
console.log(test.truncate(43));
//expect(testString.truncate(43)).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect truncate() functionality 3');
console.log(test.truncate(45));
//expect(testString.truncate(45)).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect truncate() functionality 4');



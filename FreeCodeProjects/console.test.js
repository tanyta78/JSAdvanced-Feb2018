let expect = require('chai').expect;

let Console = (function () {
    class Console {

        static get placeholder() {
            return /{\d+}/g;
        }

        static writeLine() {
            let message = arguments[0];
            if (arguments.length === 1) {
                if (typeof (message) === 'object') {
                    message = JSON.stringify(message);
                    return message;
                }
                else if (typeof (message) === 'string') {
                    return message;
                }
            }
            else {
                if (typeof (message) !== 'string') {
                    throw new TypeError("No string format given!");
                }
                else {
                    let tokens = message.match(this.placeholder).sort(function (a, b) {
                        a = Number(a.substring(1, a.length - 1));
                        b = Number(b.substring(1, b.length - 1));
                        return a - b;
                    });
                    if (tokens.length !== (arguments.length - 1)) {
                        throw new RangeError("Incorrect amount of parameters given!");
                    }
                    else {
                        for (let i = 0; i < tokens.length; i++) {
                            let number = Number(tokens[i].substring(1, tokens[i].length - 1));
                            if (number !== i) {
                                throw new RangeError("Incorrect placeholders given!");
                            }
                            else {
                                message = message.replace(tokens[i], arguments[i + 1])
                            }
                        }
                        return message;
                    }
                }
            }
        }
    };

    return Console;
}());

describe('C# ConsoleTests', function () {
    describe('general tests', function () {
        it("should contain writeline and should be a function", function () {
            expect(Console.writeLine).to.exist;
            expect(typeof (Console.writeLine)).to.equal('function');
        });
        describe('Tests with correct input', function () {
            it('If only a single parameter is passed and it is a string it should return it.', function () {
                expect(Console.writeLine('test string')).to.be.equal('test string', 'Only a single argument is passed and it is a string and the function do not return it.');
            });
            it('If only a single parameter is passed and it is an object - return the JSON representation of the object', function () {
                let obj = { name: 'Ribaldo', age: 5, dead: [true, '10'] };
                expect(Console.writeLine(obj)).to.be.equal('{"name":"Ribaldo","age":5,"dead":[true,"10"]}', 'Only a single parameter is passed and it is an object do not return the JSON representation of the object');
            });
            it('If multiple arguments are passed and the first is a string,it should find all placeholders from the string and exchange them with the supplied parameters', function () {
                expect(Console.writeLine('The {0} {1} {2} jumps over the lazy {3}', 'quick', 'brown', 'fox', 'dog'))
                    .to.equal('The quick brown fox jumps over the lazy dog');
            });
            it("should exchange all placeholders with the correct parameters from different types", () => {
                expect(Console.writeLine('Why task {0} has a {1} when its so easy?', 5, 'star'))
                    .to.equal('Why task 5 has a star when its so easy?');
            });
            it("should support more than 10 placeholders and parameters passed", () => {
                expect(Console.writeLine('{0} {1} {2} {3} {4} {5} {6} {7} {8} {9} {10}!'
                    , 'This', 'task', 'is', 'so', 'annoying', 'its', 'not', 'cool', 'at', 'all', 'mate'))
                    .to.equal('This task is so annoying its not cool at all mate!');
            });

        });
        describe('Tests with incorrect input', function () {
            it('Pass empty input throws a TypeError', function () {
                expect(() => Console.writeLine()).to.throw(TypeError);
            });
            it("if multiple arguments are passed, but the first is not a string should throw a TypeError.", () => {
                expect(() => Console.writeLine({ obj: 'error' }, 'It\'s not right!')).to.throw(TypeError);
            });

            it("if parameters count does not correspond to the number of placeholders in the string should throw a RangeError", () => {
                expect(() => Console.writeLine('The {0} brown fox {1} over {2} lazy dog', 'quick', 'brown')).to.throw(RangeError);
            });

            it("if parameters count does not correspond to the number of placeholders in the string should throw a RangeError", () => {
                expect(() => Console.writeLine('The {0} brown fox jumps over the lazy {1}', 'dog')).to.throw(RangeError);
            });

            it("if the placeholders have indexes not within the parameters range should throw RangeError", () => {
                expect(() => Console.writeLine('The {0} brown fox jumps over the lazy {3}', 'quick', 'dog')).to.throw(RangeError);
            });

            it("if the placeholders have indexes not within the parameters range should throw RangeError", () => {
                expect(() => Console.writeLine('The {0} brown {22} jumps over the lazy {1}', 'quick', 'fox', 'dog')).to.throw(RangeError);
            });

        });
    });
})

/*Using a closure, create an inner object to process list commands. The commands supported should be the following:
•	add <string> - adds the following string in an inner collection.
•	remove <string> - removes all occurrences of the supplied <string> from the inner collection.
•	print - prints all elements of the inner collection joined by ", ".
Input
The input will come as an array of strings - each string represents a command to be executed from the command execution engine.
*/
function solve(commands) {
    let processor = (function () {
        let listOfStr = [];
        return {
            add: function (str) {
                return listOfStr.push(str);
            },
            remove: function (str) {
                return listOfStr=listOfStr.filter(e => e != str);
            },
            print: function () {
                console.log(listOfStr);

            }
        }
    })();

    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        processor[cmdName](arg);
    
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

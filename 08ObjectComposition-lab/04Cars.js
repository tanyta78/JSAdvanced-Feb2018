function solve(cmds) {


    let processor = (function () {
        let objects = new Map();

        function create(name, param, parent) {
            if (param) {
                inherit(name, parent);
            } else {
                objects.set(name, {});
            }

        }
        function inherit(name, parent) {
            objects.set(name, Object.create(objects.get(parent)));
        }
        function set(objName, propName, value) {
            objects.get(objName)[propName] = value;
        }

        function print(name) {
            let current = objects.get(name);
            let result = [];
            for (let prop in current) {
                result.push(`${prop}:${current[prop]}`);
            }

            console.log(result.join(', '));

        }

        return {
            create,
            inherit,
            set,
            print
        };
    })();

    for (let cmd of cmds) {
        let [command, name, param, value] = cmd.split(' ');
        processor[command](name,param,value);
    }
}

solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)
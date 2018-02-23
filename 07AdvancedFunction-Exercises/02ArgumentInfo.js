function result() {
    let info = {};
    for (let arg of arguments) {
        let type = typeof arg;
        if (!info[type]) {
            info[type] = 1;
        } else {
            info[type]++;
        }

        console.log(type + ': ' + arg);
    }

    Object.keys(info).sort((a, b) => { return info[b] - info[a]; }).forEach(k => console.log(`${k} = ${info[k]}`));
    

}
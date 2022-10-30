function argumentInfo(...args) {
    let argsObj = {};
    args.forEach((x) => {
        console.log(`${typeof x}: ${x}`);
        if (!argsObj[typeof x]) {
            argsObj[typeof x] = 0;
        }
        argsObj[typeof x]++;
    });
    Object.keys(argsObj)
        .sort((a, b) => argsObj[b] - argsObj[a])
        .forEach((x) => console.log(`${x} = ${argsObj[x]}`));
}

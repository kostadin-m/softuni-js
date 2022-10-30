function listProccesor(input) {
    let newList = [];
    let commands = {
        add(str) {
            newList.push(str);
        },
        remove(str) {
            newList = newList.filter((x) => x != str);
        },
        print() {
            console.log(newList.join(","));
        },
    };
    input.forEach((x) => {
        let [command, string] = x.split(" ");
        commands[command](string);
    });
}

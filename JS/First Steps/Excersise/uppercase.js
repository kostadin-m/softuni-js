function upperCase(string){
    let result = string.toUpperCase()
    .split(/[\W]+/)
    .filter(w => w.length > 0)
    .join(", ");

    console.log(result)
}

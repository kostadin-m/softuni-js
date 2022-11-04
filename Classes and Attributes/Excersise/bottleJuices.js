function bottleJuices(array) {
    let bottlesObj = {};
    let totalObj = {};
    array.forEach((x) => {
        [type, ml] = x.split(" => ");
        if (!bottlesObj.hasOwnProperty(type)) {
            bottlesObj[type] = 0;
        }
        bottlesObj[type] += Number(ml);
        if (bottlesObj[type] >= 1000) {
            if (!totalObj.hasOwnProperty(type)) {
                totalObj[type] = 0;
            }
            totalObj[type] = bottlesObj[type];
        }
    });
    Object.keys(totalObj).forEach((x) => {
        totalObj[x] = Math.floor(totalObj[x] / 1000);
    });
    Object.keys(totalObj).forEach((x) => {
        console.log(`${x} => ${totalObj[x]}`);
    });
}

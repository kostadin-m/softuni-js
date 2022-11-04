function solve(input) {
    let carsMap = new Map();
    input.forEach((x) => {
        [brand, model, price] = x.split(" | ");
        if (!carsMap.has(brand)) {
            carsMap.set(brand, new Map());
        }
        currentBrandModels = carsMap.get(brand);
        if (!currentBrandModels.has(model)) {
            currentBrandModels.set(model, 0);
        }
        currentBrandModels.set(model, currentBrandModels.get(model) + Number(price));
    });
    for (const brand of carsMap.keys()) {
        console.log(brand);
        let models = carsMap.get(brand);
        for (const model of models.keys()) {
            console.log(`###${model} -> ${models.get(model)}`);
        }
    }
}

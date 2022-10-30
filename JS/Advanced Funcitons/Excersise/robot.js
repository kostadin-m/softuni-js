function solution() {
    let robotqunatity = { carbohydrate: 0, flavour: 0, fat: 0, protein: 0 };

    const dishes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    const commands = {
        restock(element, count) {
            robotqunatity[element] += Number(count);
            return "Success";
        },
        prepare(dish, count) {
            let dishToCook = dishes[dish];
            for (el in dishToCook) {
                if (robotqunatity[el] < dishToCook[el] * Number(count)) {
                    return `Error: not enough ${el} in stock`;
                }
            }
            Object.keys(dishToCook).forEach((x) => (robotqunatity[x] -= dishToCook[x] * count));
            return "Success";
        },
        report() {
            return `protein=${robotqunatity.protein} carbohydrate=${robotqunatity.carbohydrate} fat=${robotqunatity.fat} flavour=${robotqunatity.flavour}`;
        },
    };

    return function (string) {
        let [command, type, count] = string.split(" ");
        return commands[command](type, count);
    };
}

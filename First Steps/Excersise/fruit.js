buyFruit('orange', 2500, 1.90)

function buyFruit(fruit, grams, price_per_kilo){
    let gramToKilogram = grams /1000
    let price = gramToKilogram * price_per_kilo
    console.log(`I need $${price.toFixed(2)} to buy ${gramToKilogram.toFixed(2)} kilograms ${fruit}.`)
}

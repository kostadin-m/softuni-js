function productCity(array) {
  let products = {};

  for (obj of array) {
    [city, product, price] = obj.split(" | ");
    price = Number(price);
    if (product in products) {
      if (price < products[product].price) {
        products[product].price = price;
        products[product].city = city;
      }
    } else {
      products[product] = { price, city };
    }
  }
  Object.keys(products).forEach((x) => {
    console.log(`${x} -> ${products[x].price} (${products[x].city})`);
  });
}

productCity();

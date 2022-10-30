function sortedObject(array) {
  let obj = {};
  array.sort();
  for (el of array) {
    [name, price] = el.split(" : ");
    price = Number(price);
    firstLetter = name[0];
    if (!obj.hasOwnProperty(firstLetter)) {
      obj[firstLetter] = [];
    }
    obj[firstLetter].push({ name, price });
  }
  Object.keys(obj).forEach((x) => {
    console.log(x);
    obj[x].forEach((x) => {
      console.log(`  ${x.name}: ${x.price} `);
    });
  });
}

function heroicInventory(array) {
  let playerList = [];
  for (player of array) {
    [name, level, items] = player.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
    playerList.push({ name, level, items });
  }
  return JSON.stringify(playerList);
}

console.log(
  heroicInventory([
    "Isacc / 25 / ",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);

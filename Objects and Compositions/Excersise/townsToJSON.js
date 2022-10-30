function townsToJSON(towns) {
  let townsArr = [];
  for (let town of towns.slice(1)) {
    let [empty, name, latitude, longitude] = town.split("|");
    name = name.trim();
    latitude = Number(latitude.trim()).toFixed(2);
    longitude = Number(longitude.trim()).toFixed(2);
    let townObj = {
      Town: name,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };
    townsArr.push(townObj);
  }
  return JSON.stringify(townsArr);
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

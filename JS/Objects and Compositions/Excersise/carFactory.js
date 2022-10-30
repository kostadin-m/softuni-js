function carFactory(object) {
  const powerChecker = (power) => {
    if (power <= 90) {
      return { power: 90, volume: 1800 };
    }
    if (power <= 120) {
      return { power: 120, volume: 2400 };
    }
    return { power: 200, volume: 3500 };
  };
  const getWheels = (size) => {
    let newSize = size % 2 == 0 ? size - 1 : size;
    return new Array(4).fill(newSize);
  };
  return {
    model: object.model,
    engine: powerChecker(object.power),
    carriage: { type: object.carriage, color: object.color },
    wheels: getWheels(object.wheelsize),
  };
}

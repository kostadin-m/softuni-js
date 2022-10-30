function solve() {
  return {
    mage: (name) => {
      mage_obj = {
        name,
        health: 100,
        mana: 100,
        cast: (spell) => {
          mage_obj.mana -= 1;
          console.log(`${mage_obj.name} cast ${spell}`);
        },
      };
      return mage_obj;
    },
    fighter: (name) => {
      fighter_obj = {
        name,
        health: 100,
        stamina: 100,
        fight: () => {
          fighter_obj.stamina -= 1;
          console.log(`${fighter_obj.name} slashes at the foe`);
        },
      };
      return fighter_obj;
    },
  };
}

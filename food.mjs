class Food {
  constructor(
    colour,
    classOfFood,
    calories,
    type,
    price,
    availability,
    origin
  ) {
    this.colour = colour;
    this.classOfFood = classOfFood;
    this.calories = calories;
    this.type = type;
    this.price = price;
    this.availability = availability;
    this.origin = origin;
  }
}

class Grains extends Food {
  constructor(colour, origin) {
    super(
      colour,
      `carbohydrate`,
      `High`,
      `Grains`,
      ` Affordable`,
      `Common`,
      origin
    );
  }
}

class Legumes extends Food {
  constructor(colour, origin) {
    super(colour, `Vegetable`, `Low`, `Legumes`, `Expensive`, `Common`, origin);
  }
}

const rice = new Grains(`White`, `China`);
const beans = new Legumes(`Brown`, `Iran`);

console.log(rice);
console.log(beans);

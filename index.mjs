// name
// color
// make

class Car {
  constructor(name, color, make) {
    this.name = name;
    this.color = color;
    this.make = make;
  }
}

const benz = new Car("Mercedes Benz", "green", "german");
const toyota = new Car("Toyota", "silver", "Chineese");

console.log(benz);
console.log(toyota);

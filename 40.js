// 40. Demonstrate classes and objects
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  describe() {
    return `${this.brand} ${this.model}`;
  }
}
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.describe());

// 41. Demonstrate inheritance in JavaScript
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a sound.`; }
}
class Dog extends Animal {
  speak() { return `${this.name} barks.`; }
}
const generic = new Animal("Some animal");
const dog = new Dog("Rex");
console.log(generic.speak());
console.log(dog.speak());

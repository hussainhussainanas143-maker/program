// 19. Demonstrate objects in JavaScript
const person = {
  name: "Alice",
  age: 28,
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};
console.log(person.name);
console.log(person.greet());
console.log(Object.keys(person));
console.log(Object.values(person));

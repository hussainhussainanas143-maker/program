// 38. Demonstrate ES6 let, const, template literals, and destructuring
let x = 10;      // can be reassigned
const y = 20;    // cannot be reassigned
console.log(`x = ${x}, y = ${y}, sum = ${x + y}`); // template literal

const person = { name: "Alice", age: 28 };
const { name, age } = person; // object destructuring
console.log(name, age);

const numbers = [1, 2, 3];
const [first, second, third] = numbers; // array destructuring
console.log(first, second, third);

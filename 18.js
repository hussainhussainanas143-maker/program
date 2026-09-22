// 18. Demonstrate arrays and array methods
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(x => x * 2));
console.log(arr.filter(x => x % 2 === 0));
console.log(arr.reduce((a, b) => a + b));
console.log(arr.find(x => x > 3));
console.log(arr.includes(3));
console.log([...arr].reverse());

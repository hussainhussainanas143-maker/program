// 13. Sort an array
const numbers = [5, 2, 9, 1, 7];
console.log([...numbers].sort((a, b) => a - b)); // ascending
console.log([...numbers].sort((a, b) => b - a)); // descending

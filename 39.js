// 39. Demonstrate spread and rest operators
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // spread
console.log(combined);

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = { ...obj1, ...obj2 }; // spread on objects
console.log(mergedObj);

function sumAll(...nums) { // rest operator
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

// 14. Find the sum and average of array elements
function sumAndAverage(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return { sum, average: sum / arr.length };
}
console.log(sumAndAverage([10, 20, 30, 40]));

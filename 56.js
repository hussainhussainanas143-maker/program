// 56. Find the second-largest element in an array
function secondLargest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
}
console.log(secondLargest([10, 5, 20, 8, 20])); // 10

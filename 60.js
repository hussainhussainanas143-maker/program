// 60. Find common elements in two arrays
function commonElements(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1)].filter(item => set2.has(item));
}
console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

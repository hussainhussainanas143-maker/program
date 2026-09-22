// 12. Find the largest and smallest element in an array
function findLargestSmallest(arr) {
  return { largest: Math.max(...arr), smallest: Math.min(...arr) };
}
console.log(findLargestSmallest([4, 9, 1, 7, 3]));

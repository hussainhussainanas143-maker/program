// 59. Find the frequency of each element in an array
function frequency(arr) {
  const freq = {};
  arr.forEach(item => { freq[item] = (freq[item] || 0) + 1; });
  return freq;
}
console.log(frequency([1, 2, 2, 3, 3, 3, 4]));

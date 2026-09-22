// 64. Count the number of words in a string
function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}
console.log(countWords("  The quick brown fox jumps  ")); // 5

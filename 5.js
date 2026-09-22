// 5. Check whether a number is positive, negative, or zero
function checkSign(n) {
  if (n > 0) return "Positive";
  if (n < 0) return "Negative";
  return "Zero";
}
console.log(checkSign(-5));
console.log(checkSign(0));
console.log(checkSign(8));

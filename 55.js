// 55. Count the number of digits in a number
function countDigits(n) {
  return String(Math.abs(n)).length;
}
console.log(countDigits(123456)); // 6

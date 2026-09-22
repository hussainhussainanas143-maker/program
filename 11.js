// 11. Find the sum of digits of a number
function sumOfDigits(n) {
  let sum = 0, num = Math.abs(n);
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumOfDigits(12345)); // 15

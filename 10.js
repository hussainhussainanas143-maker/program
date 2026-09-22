// 10. Reverse a number
function reverseNumber(n) {
  let reversed = 0, num = Math.abs(n);
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return n < 0 ? -reversed : reversed;
}
console.log(reverseNumber(12345)); // 54321

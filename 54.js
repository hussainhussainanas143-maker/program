// 54. Calculate the power of a number
function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) result *= base;
  return result;
}
console.log(power(2, 10)); // 1024
console.log(Math.pow(2, 10)); // built-in equivalent

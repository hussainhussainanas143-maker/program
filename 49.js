// 49. Find the greatest common divisor (GCD) of two numbers
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
console.log(gcd(48, 18)); // 6

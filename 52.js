// 52. Check whether a number is a perfect number
function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}
console.log(isPerfect(28)); // true
console.log(isPerfect(10)); // false

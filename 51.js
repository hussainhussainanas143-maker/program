// 51. Check whether a number is an Armstrong number
function isArmstrong(n) {
  const digits = String(n).split("");
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), power), 0);
  return sum === n;
}
console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false

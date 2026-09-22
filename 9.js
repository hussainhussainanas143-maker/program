// 9. Check whether a number is a palindrome
function isPalindromeNumber(n) {
  const str = String(n);
  return str === str.split("").reverse().join("");
}
console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(123)); // false

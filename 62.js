// 62. Check whether a string is a palindrome
function isPalindromeString(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}
console.log(isPalindromeString("Madam")); // true
console.log(isPalindromeString("Hello"));  // false

// 67. Validate an email address using a regular expression
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid-email"));    // false

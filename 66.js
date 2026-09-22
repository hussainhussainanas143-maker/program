// 66. Demonstrate regular expressions in JavaScript
const text = "Contact us at support@example.com or sales@example.com";

console.log(/\d+/.test("abc123"));            // true - contains digits
console.log("abc123def".match(/\d+/)[0]);     // "123"
console.log(text.match(/[\w.-]+@[\w.-]+/g));  // extract all emails
console.log("2026-09-19".replace(/-/g, "/")); // "2026/09/19"

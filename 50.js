// 50. Find the least common multiple (LCM) of two numbers
function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function lcm(a, b) { return (a * b) / gcd(a, b); }
console.log(lcm(4, 6)); // 12

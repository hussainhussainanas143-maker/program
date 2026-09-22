// 53. Generate the multiplication table of a given number
function multiplicationTable(n, upto = 10) {
  for (let i = 1; i <= upto; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
multiplicationTable(7);

// 63. Count vowels and consonants in a string
function countVowelsConsonants(str) {
  const letters = str.toLowerCase().replace(/[^a-z]/g, "");
  let vowels = 0, consonants = 0;
  for (const ch of letters) {
    if ("aeiou".includes(ch)) vowels++;
    else consonants++;
  }
  return { vowels, consonants };
}
console.log(countVowelsConsonants("Hello World"));

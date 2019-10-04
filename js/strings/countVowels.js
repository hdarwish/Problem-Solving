function getVowels(str) {
  const m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}
const str = 'hafs';
const vcount = getVowels(str);
console.log(`vowels:${vcount}, consonent: ${str.length - vcount}`);

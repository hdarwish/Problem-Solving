function alternatingCharacters(s) {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    if (!(s[i].charCodeAt(0) ^ s[i - 1].charCodeAt(0))) {
      count++;
    }
  }
  return count;
}
console.log(alternatingCharacters('AAABBB'));

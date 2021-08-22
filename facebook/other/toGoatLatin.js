/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  let result = [];
  let prev = '';
  let words = S.split(/\s/);
  for (const word of words) {
    let word1 = /^[aeuio]/i.test(word) ? `${word}ma` : `${word.slice(1)}${word[0]}ma`;
    prev += 'a';
    result.push(`${word1}${prev}`);
  }
  return result.join(' ');
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s.length) return true;
  let valid = [];
  for (let ch of s) {
    if ((ch.charCodeAt(0) >= 'A'.charCodeAt(0) && ch.charCodeAt(0) <= 'Z'.charCodeAt(0)) ||
      (ch.charCodeAt(0) >= 'a'.charCodeAt(0) && ch.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
      (ch.charCodeAt(0) >= '0'.charCodeAt(0) && ch.charCodeAt(0) <= '9'.charCodeAt(0)))
      valid.push(ch);
  }
  let l = 0, r = valid.length - 1;
  while (l < r) {
    if (valid[l].toLocaleLowerCase() !== valid[r].toLocaleLowerCase()) return false;
    l++;
    r--;
  }
  return true;

};
console.log(isPalindrome('A man, a plan, a canal: Panama'));
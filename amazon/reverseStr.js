/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 */
var reverseStr = function (s, k) {
  if (s.length <= k) return s.split('').reverse().join('');
  let res = [];
  s = s.split('');
  while (s.length > k) {
    res.push(...(s.splice(0, k).reverse()));
    res = res.concat(s.splice(0, k));
  }
  res.push(...(s.reverse()));
  return res.join('');


};
console.log(reverseStr('abcdefg', 2));
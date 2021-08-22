/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let map = new Map(); //current index of char.
  for (let j = 0, i = 0; j < s.length; j++) {
    i = Math.max((map.get(s[j]) || 0), i);
    ans = Math.max(ans, j - i + 1);
    map.set(s[j], j + 1);
  }
  return ans;
};
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
  let dp = new Array(s.length + 1).fill(false).map(() => new Array(p.length + 1).fill(false));
  dp[s.length][p.length] = true;

  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      let first_match = (i < s.length &&
        (p[j] === s[i] ||
          p[j] === '.'));
      if (j + 1 < p.length && p[j + 1] === '*') {
        dp[i][j] = dp[i][j + 2] || (first_match && dp[i + 1][j]);
      } else {
        dp[i][j] = first_match && dp[i + 1][j + 1];
      }
      // console.log('i, j, first_match, dp', i, j, first_match, dp);
    }
  }
  return dp[0][0];
};
console.log(isMatch('aab', 'c*a*b'));

//  0  1   2   3   4   5
//  T| F | T | F | F | F | a 0
//  T| F | T | F | F | F | a 1
//  T| F | T | F | T | F | b 2
//  F| F | F | F | F | T |   3
//  c  *   a   *   b 
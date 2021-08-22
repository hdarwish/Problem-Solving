/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (!s.length || s[0] < '1' || s[0] > '9') return 0;
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = dp[1] = 1;
  for (let i = 1; i < s.length; i++) {
    if (isNaN(s[i])) return 0;
    let v = parseInt(s.substr(i - 1, 2));
    if (v <= 26 && v > 9) dp[i + 1] += dp[i - 1];
    if (s[i] != '0') dp[i + 1] += dp[i];
  }
  return dp[s.length];
};
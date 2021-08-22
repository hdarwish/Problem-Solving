// var numRollsToTarget = (d, f, t, ans = 0) => {
//   let cur = Array(t + 1).fill(0);
//   cur[0] = 1;
//   for (let i = 1; i <= d; ++i) {
//     let pre = [...cur];
//     cur.fill(0);
//     for (let j = 1; j <= t; ++j)
//       for (let k = 1; k <= f; ++k)
//         if (j - k >= 0) {
//           cur[j] = (cur[j] + pre[j - k]) % (1e9 + 7);        
//         }
//   }
//   return cur[t];
// };
const MAX = 1e9 + 7;
var numRollsToTarget = function (d, f, target) {
  let dp = new Array(target + 1)
  dp.fill(0);
  dp[0] = 1
  for (let i = 1; i <= d; i++) {
    for (let j = target; j >= 0; j--) {
      dp[j] = 0
      for (let k = 1; k <= f && k <= j; k++) {
        dp[j] = (dp[j] + dp[j - k]) % MAX;
        console.log('dp', dp, i, j, k);
      }
    }
  }
  return dp[target]
};
console.log(numRollsToTarget(2, 6, 7));
/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeightII(stones) {
  let dp = [], sum = 0;
  dp[0] = true;
  stones.forEach(stone => {
    sum += stone;
    for (let i = sum; i >= stone; i--) {
      if (dp[i - stone]) {
        dp[i] = true;
      }
    }
  });
  console.log('dp', dp)
  for (let i = Math.floor(sum / 2); i >= 0; i--) {
    if (dp[i]) {
      return sum - i - i;
    }
  }
  return sum;
}

console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]));
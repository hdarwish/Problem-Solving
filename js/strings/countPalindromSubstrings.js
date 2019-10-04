function substrpalindromeCount(s) {
  let tuple = [];
  let count = 0;
  let cur = null;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === cur) {
      count++;
    } else {
      if (cur) {
        tuple.push([cur, count]);
      }
      cur = s[i];
      count = 1;
    }
  }
  tuple.push([cur, count]);
  let ans = 0;
  for (let i of tuple) {
    ans += (i[1] * (i[1] + 1)) / 2;
  }
  for (let i = 1; i < tuple.length - 1; i++) {
    if (tuple[i - 1][0] === tuple[i + 1][0] && tuple[i][1] === 1) {
      ans += Math.min(tuple[i - 1][1], tuple[i + 1][1]);
    }
  }
  return ans;
}
console.log(substrpalindromeCount('asasd'));

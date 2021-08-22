/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (!s.length || !t.length) return '';
  let dicT = new Map();
  for (let l of t) dicT.set(l, (dicT.get(l) || 0) + 1);
  let filteredS = [];
  for (let i = 0; i < s.length; i++) {
    if (dicT.has(s[i])) {
      filteredS.push([i, s[i]]);
    }
  }
  let required = dicT.size;
  let l = 0, r = 0, formed = 0;
  let windowCount = new Map();
  let ans = [-1, 0, 0];
  while (r < filteredS.length) {
    let ch = filteredS[r][1];
    windowCount.set(ch, (windowCount.get(ch) || 0) + 1);

    if (windowCount.get(ch) === dicT.get(ch)) {
      formed++;
    }
    while (formed === required) {
      ch = filteredS[l][1];

      let start = filteredS[l][0];
      let end = filteredS[r][0];
      if (ans[0] === -1 || end - start + 1 < ans[0]) {
        ans[0] = end - start + 1;
        ans[1] = start;
        ans[2] = end;
      }
      windowCount.set(ch, windowCount.get(ch) - 1);
      if (windowCount.get(ch) < dicT.get(ch)) formed--;
      l++;
    }
    r++;
  }
  return ans[0] == -1 ? "" : s.slice(ans[1], ans[2] + 1);
}
console.log(minWindow('ADOBECODEBANC', 'ABC'))
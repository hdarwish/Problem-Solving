/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = [], n = p.length, chrs = new Array(128).fill(0);

  for (let i = 0; i < n; i++) {
    chrs[p.charCodeAt(i)]++;
  }

  let l = 0, r = 0, count = p.length;
  while (r < s.length) {
    if (r - l === p.length && chrs[s.charCodeAt(l++)]++ >= 0) {
      count++;
    }

    if (chrs[s.charCodeAt(r++)]-- >= 1) {
      count--;
    }

    if (count === 0) {
      res.push(l);
    }
  }
  return res;

  // const list = Array(26).fill(0);
  // const ls = s.length;
  // const lp = p.length;
  // for (let i = 0; i < lp; i++) {
  //   list[getIndex(p[i])]++;
  // }
  // let t = 0;
  // let count = 0;
  // const memo = Array(26).fill(0);
  // const result = [];
  // for (let i = 0; i < ls; i++) {
  //   const c = getIndex(s[i]);
  //   if (!list[c]) {
  //     while (count > 0) {
  //       reset();
  //     }
  //     continue;
  //   }
  //   while (list[c] === memo[c] || count === lp) {
  //     reset();
  //   }
  //   if (count <= 0) {
  //     t = i;
  //     count = 0;
  //   }
  //   count++;
  //   memo[c]++;
  //   if (count === lp) {
  //     result.push(t);
  //   }
  // }
  // return result;

  // function reset() {
  //   memo[getIndex(s[t++])]--;
  //   count--;
  // }
}

function getIndex(c) {
  return c.charCodeAt() - 97;
}
console.log(findAnagrams("cbaebabacd", "abc"));
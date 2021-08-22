/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) return [];
  let ans = new Map();
  let count = new Array(26);
  for (let s of strs) {
    count.fill(0);
    for (let c of s) count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    let key = '';
    for (let i = 0; i < 26; i++) {
      key = key.concat('#', count[i]);
    }
    if (!ans.has(key)) ans.set(key, []);
    let val = ans.get(key);
    val.push(s);
    ans.set(key, val);
  }
  return [...ans.values()];
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
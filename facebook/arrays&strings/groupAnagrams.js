/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (!strs.length) return [];
  let map = new Map();
  let count = new Array(26);
  for (let str of strs) {
    count.fill(0);
    for (let ch of str) count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    let key = count.join('');
    if (!map.has(key)) {
      map.set(key, [str])
    } else {
      let curr = map.get(key);
      curr.push(str);
      map.set(key, curr);
    }
  }
  return [...map.values()];

};
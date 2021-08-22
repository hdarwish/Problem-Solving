/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  // Map<Character, Set<Character>> map=new HashMap<Character, Set<Character>>();
  let map = new Map();
  // Map<Character, Integer> degree=new HashMap<Character, Integer >();
  let degree = new Map();
  let result = '';
  if (words === null || words.length === 0) return result;
  for (let s of words) {
    for (let c of s.split('')) {
      degree.set(c, 0);
    }
  }
  for (let i = 0; i < words.length - 1; i++) {
    let cur = words[i];
    let next = words[i + 1];
    let length = Math.min(cur.length, next.length);
    for (let j = 0; j < length; j++) {
      let c1 = cur[j];
      let c2 = next[j];
      if (c1 !== c2) {
        let set = new Set();
        if (map.has(c1)) set = map.get(c1);
        if (!set.has(c2)) {
          set.add(c2);
          map.set(c1, set);
          degree.set(c2, degree.get(c2) + 1);
        }
        break;
      }
    }
  }
  // Queue<Character> q=new LinkedList<Character>();
  let q = [];
  for (let c of degree.keys()) {
    if (degree.get(c) === 0) q.push(c);
  }
  while (q.length) {
    let c = q.shift();
    result += c;
    if (map.has(c)) {
      for (let c2 of map.get(c)) {
        degree.set(c2, degree.get(c2) - 1);
        if (degree.get(c2) === 0) q.push(c2);
      }
    }
  }
  if (result.length !== degree.size) return "";
  return result;

};
let lengthOfLongestSubstring = function (s) {
  let n = s.length, ans = 0;
  let map = new Map(); // current index of character
  // try to extend the range [i, j]
  for (let j = 0, i = 0; j < n; j++) {
    if (map.has(s.charCodeAt(j))) {
      i = Math.max(map.get(s.charCodeAt(j)), i);
    }
    ans = Math.max(ans, j - i + 1);
    console.log('ans i j', ans, i, j);
    map.set(s.charCodeAt(j), j + 1);
  }
  console.log('map', map);
  return ans;
}
console.log(lengthOfLongestSubstring('pwwkew'));
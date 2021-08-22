/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length === 0 || t.length === 0) {
    return "";
  }

  let dictT = new Map();

  for (let i = 0; i < t.length; i++) {
    let count = dictT.get(t.charAt(i)) || 0;
    dictT.set(t.charAt(i), count + 1);
  }

  let required = dictT.size;

  // Filter all the characters from s into a new list along with their index.
  // The filtering criteria is that the character should be present in t.
  // List < Pair < Integer, Character >> filteredS = new ArrayList<Pair<Integer, Character>>();
  let filteredS = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (dictT.has(c)) {
      filteredS.push([i, c]);
    }
  }

  let l = 0, r = 0, formed = 0;
  let windowCounts = new Map();
  let ans = [- 1, 0, 0];

  // Look for the characters only in the filtered list instead of entire s.
  // This helps to reduce our search.
  // Hence, we follow the sliding window approach on as small list.
  while (r < filteredS.length) {
    let c = filteredS[r][1];
    let count = windowCounts.get(c) || 0;
    windowCounts.set(c, count + 1);

    if (dictT.has(c) && windowCounts.get(c) === dictT.get(c)) {
      formed++;
    }

    // Try and contract the window till the point where it ceases to be 'desirable'.
    while (l <= r && formed === required) {
      c = filteredS[l][1];

      // Save the smallest window until now.
      let end = filteredS[r][0];
      let start = filteredS[l][0];
      if (ans[0] === -1 || end - start + 1 < ans[0]) {
        ans[0] = end - start + 1;
        ans[1] = start;
        ans[2] = end;
      }

      windowCounts.set(c, windowCounts.get(c) - 1);
      if (dictT.has(c) && windowCounts.get(c) < dictT.get(c)) {
        formed--;
      }
      l++;
    }
    r++;
  }
  return ans[0] == -1 ? "" : s.substring(ans[1], ans[2] + 1);
};
console.log(minWindow("ADOBECODEBANC", "ABC"))
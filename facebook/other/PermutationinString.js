/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * Approach #5 Sliding Window [Accepted]:
Algorithm

Instead of generating the hashmap afresh for every window considered in s2, 
we can create the hashmap just once for the first window in s2. Then, 
later on when we slide the window, we know that we add one preceding character
 and add a new succeeding character to the new window considered. Thus,
  we can update the hashmap by just updating the indices associated with those two characters only.
   Again, for every updated hashmap, we compare all the elements of the hashmap for equality to get the required result.

   Complexity Analysis Time complexity : O(l1 + 26∗(l2−l1)), where l1 is the length of string l1 ​ and l 2 ​ is the length of string l 2 ​ 
   . Space complexity : O(1). Constant space is used.
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length)
    return false;
  let s1map = new Array(26).fill(0);
  let s2map = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    s1map[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    s2map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (let i = 0; i < s2.length - s1.length; i++) {
    if (matches(s1map, s2map))
      return true;
    s2map[s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)]++;
    s2map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }
  return matches(s1map, s2map);
}
function matches(s1map, s2map) {
  for (let i = 0; i < 26; i++) {
    if (s1map[i] !== s2map[i])
      return false;
  }
  return true;
}
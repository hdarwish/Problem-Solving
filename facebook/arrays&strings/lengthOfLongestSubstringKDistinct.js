/**
 * @param {string} s
 * @param {number} k
 * @return {number}
Algorithm

Return 0 if the string is empty or k is equal to zero.
Set both set pointers in the beginning of the string left = 0 and right = 0 and init max substring length max_len = 1.
While right pointer is less than N:
Add the current character s[right] in the hashmap and move right pointer to the right.
If hashmap contains k + 1 distinct characters, remove the leftmost character from the hashmap and move the left pointer so 
that sliding window contains again k distinct characters only.
Update max_len.

Complexity Analysis

Do we have here the best possible time complexity O(N) as it was for more simple problem with at most two distinct characters?

For the best case when input string contains not more than k distinct characters the answer is yes.
 It's the only one pass along the string with N characters and the time complexity is O(N).

For the worst case when the input string contains n distinct characters, the answer is no. 
In that case at each step one uses O(k) time to find a minimum value in the hashmap with k elements 
and so the overall time complexity is O(Nk).

Time complexity : O(N) in the best case of k distinct characters in the string
 and O(Nk) in the worst case of N distinct characters in the string.

Space complexity : O(k) since additional space is used only for a hashmap with at most k + 1 elements.

 */

var lengthOfLongestSubstringKDistinct = function (s, k) {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  let n = s.length;
  if (n * k === 0) return 0;
  let left = 0, right = 0;
  let maxLength = 1;
  let windowMap = new Map();
  while (right < n) {
    let char = s[right];
    if (windowMap.has(char)) windowMap.delete(char);
    windowMap.set(char, right++);
    if (windowMap.size > k) {
      let del_index = windowMap.values().next().value;
      windowMap.delete(s[del_index]);
      left = del_index + 1;
    }
    maxLength = Math.max(maxLength, right - left);
  }
  return maxLength;
};

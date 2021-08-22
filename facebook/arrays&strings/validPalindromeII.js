/**
 * @param {string} s
 * @return {boolean}
 * Approach #2: Greedy [Accepted]
Intuition

If the beginning and end characters of a string are the same (ie. s[0] == s[s.length - 1]),
 then whether the inner characters are a palindrome (s[1], s[2], ..., s[s.length - 2]) 
 uniquely determines whether the entire string is a palindrome.

Algorithm

Suppose we want to know whether s[i], s[i+1], ..., s[j] form a palindrome. If i >= j then we are done. 
If s[i] == s[j] then we may take i++; j--. Otherwise, the palindrome must be either s[i+1], s[i+2], ..., s[j] 
or s[i], s[i+1], ..., s[j-1], and we should check both cases.

Complexity Analysis

Time Complexity: O(N) where N is the length of the string.
 Each of two checks of whether some substring is a palindrome is O(N).

Space Complexity: O(1) additional complexity. Only pointers were stored in memory.
 */
var validPalindrome = function (s) {
  for (let i = 0; i < parseInt(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      let j = s.length - i - 1;
      return (isPalindrome(s, i, j - 1) || isPalindrome(s, i + 1, j));

    }
  }
  return true;
};
function isPalindrome(s, i, j) {
  for (let k = i; k <= i + parseInt((j - i) / 2); k++) {
    if (s[k] !== s[j - k + i]) return false;
  }
  return true;
}

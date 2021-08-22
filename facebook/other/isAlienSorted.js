/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 * Approach 1: Check Adjacent Words
Intuition

The words are sorted lexicographically if and only if adjacent words are. 
This is because order is transitive: a <= b and b <= c implies a <= c.

Algorithm

Let's check whether all adjacent words a and b have a <= b.

To check whether a <= b for two adjacent words a and b, we can find their first difference. For example,
 "applying" and "apples" have a first difference of y vs e. After, we compare these characters to the index in order.

Care must be taken to deal with the blank character effectively. If for example, we are comparing "app" to "apply",
 this is a first difference of (null) vs "l".

 Time Complexity: O(C), where C is the total content of words.

Space Complexity: O(1).
 */
var isAlienSorted = function (words, order) {
  let index = new Array(26).fill(0);
  for (let i = 0; i < order.length; ++i)
    index[order.charCodeAt(i) - 'a'.charCodeAt(0)] = i;

  search: for (let i = 0; i < words.length - 1; ++i) {
    let word1 = words[i];
    let word2 = words[i + 1];

    // Find the first difference word1[k] != word2[k].
    for (let k = 0; k < Math.min(word1.length, word2.length); ++k) {
      if (word1.charAt(k) !== word2.charAt(k)) {
        // If they compare badly, it's not sorted.
        if (index[word1.charCodeAt(k) - 'a'.charCodeAt(0)] >
          index[word2.charCodeAt(k) - 'a'.charCodeAt(0)])
          return false;
        continue search;
      }
    }

    // If we didn't find a first difference, the
    // words are like ("app", "apple").
    if (word1.length > word2.length)
      return false;
  }

  return true;
};
/**
 * @param {string} digits
 * @return {string[]}
 * Approach 1: Backtracking
Backtracking is an algorithm for finding all solutions by exploring all potential candidates.
 If the solution candidate turns to be not a solution (or at least not the last one),
  backtracking algorithm discards it by making some changes on the previous step, i.e. backtracks and then try again.

Here is a backtrack function backtrack(combination, next_digits) which takes as arguments an ongoing letter combination
 and the next digits to check.

If there is no more digits to check that means that the current combination is done.
If there are still digits to check :
Iterate over the letters mapping the next available digit.
Append the current letter to the current combination combination = combination + letter.
Proceed to check next digits : backtrack(combination + letter, next_digits[1:]).

Complexity Analysis

Time complexity : {O}(3^N * 4^M) where N is the number of digits in the input that maps to 3 letters (e.g. 2, 3, 4, 5, 6, 8)
 and M is the number of digits in the input that maps to 4 letters (e.g. 7, 9), 
 and N+M is the total number digits in the input.

Space complexity : O(3^N * 4^M) since one has to keep 3^N * 4^M solutions.
 */

var letterCombinations = function (digits) {
  var phone = new Map([["2", "abc"],
  ["3", "def"],
  ["4", "ghi"],
  ["5", "jkl"],
  ["6", "mno"],
  ["7", "pqrs"],
  ["8", "tuv"],
  ["9", "wxyz"]]
  );

  var result = new Array();
  if (digits.length)
    backtrack("", digits);
  return result;
  function backtrack(combination, next_digits) {
    // if there is no more digits to check
    if (next_digits.length === 0) {
      // the combination is done
      result.push(combination);
    }
    // if there are still digits to check
    else {
      // iterate over all letters which map 
      // the next available digit
      let digit = next_digits.substring(0, 1);
      let letters = phone.get(digit);
      for (let i = 0; i < letters.length; i++) {
        let letter = phone.get(digit).substring(i, i + 1);
        // append the current letter to the combination
        // and proceed to the next digits
        backtrack(combination + letter, next_digits.substring(1));
      }
    }
  }
};

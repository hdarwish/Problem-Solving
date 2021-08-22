/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
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

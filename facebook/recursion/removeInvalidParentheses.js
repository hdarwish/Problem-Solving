/**
 * @param {string} s
 * @return {string[]}
 */

var removeInvalidParentheses = function (s) {
  let left = 0, right = 0;

  let validExpressions = new Set();
  // First, we find out the number of misplaced left and right parentheses.
  for (let i = 0; i < s.length; i++) {

    // Simply record the left one.
    if (s[i] === '(') {
      left++;
    } else if (s[i] === ')') {
      // If we don't have a matching left, then this is a misplaced right, record it.
      right = left === 0 ? right + 1 : right;

      // Decrement count of left parentheses because we have found a right
      // which CAN be a matching one for a left.
      left = left > 0 ? left - 1 : left;
    }
  }
  let exp = '';
  recurse(s, 0, 0, 0, left, right, exp);
  return [...validExpressions];


  function recurse(
    s,
    index,
    leftCount,
    rightCount,
    leftRem,
    rightRem,
    expression) {

    // If we reached the end of the string, just check if the resulting expression is
    // valid or not and also if we have removed the total number of left and right
    // parentheses that we should have removed.
    if (index == s.length) {
      if (leftRem === 0 && rightRem === 0) {
        validExpressions.add(expression);
      }

    } else {
      let character = s[index];
      let length = expression.length;

      // The discard case. Note that here we have our pruning condition.
      // We don't recurse if the remaining count for that parenthesis is == 0.
      if ((character === '(' && leftRem > 0) || (character === ')' && rightRem > 0)) {
        recurse(
          s,
          index + 1,
          leftCount,
          rightCount,
          leftRem - (character === '(' ? 1 : 0),
          rightRem - (character === ')' ? 1 : 0),
          expression);
      }

      expression += (character);

      // Simply recurse one step further if the current character is not a parenthesis.
      if (character !== '(' && character !== ')') {

        recurse(s, index + 1, leftCount, rightCount, leftRem, rightRem, expression);

      } else if (character === '(') {

        // Consider an opening bracket.
        recurse(s, index + 1, leftCount + 1, rightCount, leftRem, rightRem, expression);

      } else if (rightCount < leftCount) {

        // Consider a closing bracket.
        recurse(s, index + 1, leftCount, rightCount + 1, leftRem, rightRem, expression);
      }

      // Delete for backtracking.
      expression.slice(0, -1);
    }
  }

};
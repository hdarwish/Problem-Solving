/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  //using stack
  // let maxans = 0;
  //     let stack =[];
  //     stack.push(-1);
  //     for (let i = 0; i < s.length; i++) {
  //         if (s.charAt(i) === '(') {
  //             stack.push(i);
  //         } else {
  //             stack.pop();
  //             if (!stack.length) {
  //                 stack.push(i);
  //             } else {
  //                 maxans = Math.max(maxans, i - stack[stack.length-1]);
  //             }
  //         }
  //     }
  //     return maxans;
  // two passes
  let left = 0, right = 0, maxlength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      maxlength = Math.max(maxlength, 2 * right);
    } else if (right > left) {
      left = right = 0;
    }
  }
  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) == '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      maxlength = Math.max(maxlength, 2 * left);
    } else if (left > right) {
      left = right = 0;
    }
  }
  return maxlength;

};
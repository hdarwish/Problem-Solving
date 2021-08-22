/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let mappings = new Map([[')', '('], ['}', '{'], [']', '[']]);
  // Initialize a stack to be used in the algorithm.
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    // If the current character is a closing bracket.
    if (mappings.has(c)) {
      // Get the top element of the stack. If the stack is empty, set a dummy value of '#'
      let topElement = !stack.length ? '#' : stack.pop();
      // If the mapping for this bracket doesn't match the stack's top element, return false.
      if (topElement !== mappings.get(c)) {
        return false;
      }
    } else {
      // If it was an opening bracket, push to the stack.
      stack.push(c);
    }
  }
  // If the stack still contains elements, then it is an invalid expression.
  return !stack.length;
};
console.log(isValid('([)]'));
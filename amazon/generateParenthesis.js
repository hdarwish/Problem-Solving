/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let combinations = [];
  generateAll(new Array(2 * n), 0, combinations);
  return combinations;
};

function generateAll(current, pos, result) {
  if (pos === current.length) {
    if (valid(current))
      result.push((current).join(''));
  } else {
    current[pos] = '(';
    generateAll(current, pos + 1, result);
    current[pos] = ')';
    generateAll(current, pos + 1, result);
  }
}

function valid(current) {
  let balance = 0;
  for (let c of current) {
    if (c == '(') balance++;
    else balance--;
    if (balance < 0) return false;
  }
  return (balance == 0);
}
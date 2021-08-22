/**
 * @param {string} str
 * @return {number}
 */
var myAtoi1 = function (str) {
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};


const exp = /^(\-|\+)?[0-9]+/;
const MAX = 2147483647;
const MIN = -2147483648;

/**
 * @param {string} str
 * @return {number}
 */
function myAtoi2(str) {
  const result = exp.exec(str.trim());
  if (!result) {
    return 0;
  }
  const num = +result[0];
  if (num > MAX) {
    return MAX;
  }
  if (num < MIN) {
    return MIN;
  }
  return num;
}

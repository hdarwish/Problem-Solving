/*
Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.
*/

// It finally passed the javascript tests.
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

// the basics of the algorithm is quite straightforward. the only thing is the edge case
// because the bitwise operation treats number as a signed 32 bit integer. So if your input
// is -2147483648 and -2147483648. The bitwise operation will be messed up because
// 1 << 31 is -2147483648. For java, there is a long integer operation. But for javascript,
// there is no such conversion.
let divide = function (dividend, divisor) {
  let max = Math.pow(2, 31) - 1;
  let min = -Math.pow(2, 31);
  if (divisor === 0) {
    return dividend >= 0 ? max : min;
  }
  if (dividend === 0) {
    return 0;
  }
  if (dividend === min && divisor === -1) {
    return max;
  }
  if (divisor === min) {
    if (dividend === min) {
      return 1;
    } else {
      return 0;
    }
  }
  let result = 0;
  let shift;
  let isNegative = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0);
  let a = Math.abs(dividend);
  let b = Math.abs(divisor);
  while (a >= b) {
    shift = 0;
    while ((b << shift) > 0 && a >= (b << shift)) {
      shift++;
    }
    a -= (b << (shift - 1));
    result += (1 << (shift - 1));
  }
  return isNegative ? -result : result;
};


let dividend = 2147483647;
let divisor = 1;
-2147483648;
console.log(divide(dividend, divisor));
console.log(Number.MIN_SAFE_INTEGER);
console.log(2147483648 << 1);
// -2147483648
// -1
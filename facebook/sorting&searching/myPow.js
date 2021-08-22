/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n >= 0) {
    return power(x, n);
  }
  else {
    return 1 / power(x, -n);
  }
};

let power = function (x, n) {
  if (n === 0) {
    return 1;
  }
  let powerProduct = power(x, Math.floor(n / 2));
  powerProduct *= powerProduct;

  if (n % 2) {
    powerProduct *= x;
  }
  return powerProduct;
};
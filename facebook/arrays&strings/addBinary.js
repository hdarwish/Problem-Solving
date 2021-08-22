/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let n = a.length, m = b.length;
  if (n < m) return addBinary(b, a);
  let j = m - 1;
  let curry = 0, ans = [];
  for (let i = n - 1; i > -1; i--) {
    if (a[i] === '1') curry++;
    if (j > -1 && b[j--] === '1') curry++;
    if (curry % 2 === 1) ans.push('1');
    else ans.push('0');
    curry = parseInt(curry / 2);
  }
  if (curry === 1) ans.push('1');
  return ans.reverse().join('');
};
console.log(addBinary('1', '111'))
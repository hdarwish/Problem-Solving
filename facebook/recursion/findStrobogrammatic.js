/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function (n) {
  return helper(n, n);
}
function helper(n, m) {
  if (n === 0) return [""];
  if (n == 1) return ["0", "1", "8"];
  let list = helper(n - 2, m);
  let res = [];
  for (let i = 0; i < list.length; i++) {
    let s = list[i];
    if (n != m) res.push("0" + s + "0");
    res.push("1" + s + "1");
    res.push("6" + s + "9");
    res.push("8" + s + "8");
    res.push("9" + s + "6");
  }
  return res;
}
console.log(findStrobogrammatic(1));
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  let ns = s.length, nt = t.length;
  //ensure ns is shorter than t
  if (ns > nt) return isOneEditDistance(t, s);
  if (nt - ns > 1) return false;
  for (let i = 0; i < ns; i++) {
    if (s[i] !== t[i]) {
      if (ns === nt) {
        return s.slice(i + 1) === t.slice(i + 1);
      } else {
        return s.slice(i) === t.slice(i + 1);
      }
    }
  }
  return (ns + 1 === nt);
};
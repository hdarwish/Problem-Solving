/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  let last = new Array(26);
  for (let i = 0; i < S.length; ++i)
    last[S.charCodeAt(i) - 'a'.charCodeAt(0)] = i;

  let j = 0, anchor = 0;
  let ans = [];
  for (let i = 0; i < S.length; ++i) {
    j = Math.max(j, last[S.charCodeAt(i) - 'a'.charCodeAt(0)]);
    if (i === j) {

      ans.push(i - anchor + 1);
      anchor = i + 1;
    }
  }
  return ans;
};
console.log(partitionLabels('ababcbacadefegdehijhklij'));
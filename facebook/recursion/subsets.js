/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let output = [];
  let n = nums.length;

  for (let i = parseInt(Math.pow(2, n)); i < parseInt(Math.pow(2, n + 1)); ++i) {
    // generate bitmask, from 0..00 to 1..11
    let bitmask = i.toString(2).substring(1);

    // append subset corresponding to that bitmask
    let curr = [];
    for (let j = 0; j < n; ++j) {
      if (bitmask[j] == '1') curr.push(nums[j]);
    }
    output.push(curr);
  }
  return output;
};
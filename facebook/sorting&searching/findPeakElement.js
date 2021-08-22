/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let m = l + ((r - l) / 2) | 0;
    if (nums[m] > nums[m + 1]) r = m;
    else l = m + 1;
  }
  return l;
};
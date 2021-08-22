/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let targetRange = [-1, -1];
  let leftIndex = binarySearch(nums, target, true);
  if (leftIndex === nums.length || nums[leftIndex] !== target) {
    return targetRange;
  }
  targetRange[0] = leftIndex;
  targetRange[1] = binarySearch(nums, target, false) - 1;
  return targetRange;

};
function binarySearch(nums, target, flag) {
  let lo = 0, hi = nums.length;
  while (lo < hi) {
    let mid = lo + parseInt((hi - lo) / 2);
    if (nums[mid] > target || (flag && nums[mid] === target)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}
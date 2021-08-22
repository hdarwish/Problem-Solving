
var search = function (nums, target) {
  let start = 0, end = nums.length - 1;
  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    if (target === nums[mid]) return mid;
    if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target < nums[mid]) end = mid - 1;
      else start = mid + 1;
    } else {
      if (target <= nums[end] && target > nums[mid]) start = mid + 1;
      else end = mid - 1;
    }
  }
  return -1;
};

var search = function (nums, target) {
  let start = 0, end = nums.length - 1;
  while (start <= end) {

    let mid = start + Math.floor((end - start) / 2);
    console.log('start, end, mid 1', start, mid, end, nums[start], nums[mid], nums[end])
    if (nums[mid] === target) return mid;
    else if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target < nums[mid]) end = mid - 1;
      else start = mid + 1;
    }
    else {
      if (target <= nums[end] && target > nums[mid]) start = mid + 1;
      else end = mid - 1;
    }
    console.log('start, end, mid 2', start, mid, end)
  }
  return -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  let l = 0;
  while (l < nums.length) {
    const n1 = nums[l];
    let m = l + 1;
    let r = nums.length - 1;
    while (m < r) {
      const n2 = nums[m];
      const n3 = nums[r];
      if (n1 + n2 + n3 < 0) {
        m++;
        continue;
      }
      if (n1 + n2 + n3 > 0) {
        r--;
        continue;
      }
      result.push([n1, n2, n3]);
      while (n2 === nums[m]) {
        m++;
      }
      while (n3 === nums[r]) {
        r--;
      }
    }
    while (n1 === nums[l]) {
      l++;
    }
  }
  return result;
};
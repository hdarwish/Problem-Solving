/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  //better brute force
  //  int[] sum = new int[nums.length];
  //     sum[0] = nums[0];
  //     for (int i = 1; i < nums.length; i++)
  //         sum[i] = sum[i - 1] + nums[i];
  //     for (int start = 0; start < nums.length - 1; start++) {
  //         for (int end = start + 1; end < nums.length; end++) {
  //             int summ = sum[end] - sum[start] + nums[start];
  //             if (summ == k || (k != 0 && summ % k == 0))
  //                 return true;
  //         }
  //     }
  //     return false;
  // }

  // using hashmap
  let sum = 0;
  let map = new Map();
  map.set(0, -1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (k !== 0)
      sum = sum % k;
    if (map.has(sum)) {
      if (i - map.get(sum) > 1)
        return true;
    } else
      map.set(sum, i);
  }
  return false;
};
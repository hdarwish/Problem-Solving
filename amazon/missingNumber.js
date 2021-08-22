/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }
  return missing;
};
console.log(missingNumber([1, 2, 5, 4, 0]));
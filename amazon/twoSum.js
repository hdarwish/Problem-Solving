var twoSum = function (nums, target) {
  let hm = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [hm.get(complement), i];
    }
    map.set(nums[i], i);
  }
  throw new Error("No two sum solution");
};
console.log(twoSum([2, 7, 11, 15], 9));
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumInputSorted = function (numbers, target) {
  let low = 0, high = numbers.length - 1;
  while (low < high) {
    let sum = numbers[low] + numbers[high];
    if (sum === target)
      return [low + 1, high + 1];
    else if (sum < target)
      ++low;
    else
      --high;
  }
  return [-1, -1];
};
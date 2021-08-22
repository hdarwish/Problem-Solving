/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let list = [];
  let used = new Array(nums.length).fill(false)
  let output = [];
  backtrack(0);
  return output;

  function backtrack(first) {
    if (first === nums.length) {
      output.push([...list]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        list.push(nums[i]);
        used[i] = true;
        backtrack(first + 1);
        used[i] = false;
        list.pop();
      }
    }
  }
};
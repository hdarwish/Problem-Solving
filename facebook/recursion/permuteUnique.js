/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  function generatePermuatation() {
    if (p.length === nums.length) {
      res.push([...p]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (!used[i]) {
          if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) {
            continue;
          }
          used[i] = true;
          p.push(nums[i]);
          generatePermuatation();
          p.pop();
          used[i] = false;
        }
      }
    }
  }

  const res = [], p = [], used = new Array(nums.length).fill(false);
  nums.sort((a, b) => (a - b));
  generatePermuatation();
  return res;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // Using 2 pointers
  let left = 0, right = height.length - 1;
  let ans = 0;
  let left_max = 0, right_max = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= left_max ? (left_max = height[left]) : ans += (left_max - height[left]);
      ++left;
    }
    else {
      height[right] >= right_max ? (right_max = height[right]) : ans += (right_max - height[right]);
      --right;
    }
  }
  return ans;
  // DP
  // if (height === null)
  //   return 0;
  // let ans = 0;
  // let size = height.length;
  // let left_max = new Array(size), right_max = new Array(size);
  // left_max[0] = height[0];
  // for (let i = 1; i < size; i++) {
  //   left_max[i] = Math.max(height[i], left_max[i - 1]);
  // }
  // right_max[size - 1] = height[size - 1];
  // for (let i = size - 2; i >= 0; i--) {
  //   right_max[i] = Math.max(height[i], right_max[i + 1]);
  // }
  // console.log('left_max, right_max', left_max, right_max);
  // for (let i = 1; i < size - 1; i++) {
  //   console.log('left_max[i], right_max[i]) - height[i]', left_max[i], right_max[i], height[i]);
  //   ans += Math.min(left_max[i], right_max[i]) - height[i];
  // }
  // return ans;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
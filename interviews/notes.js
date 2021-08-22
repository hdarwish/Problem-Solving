var find132pattern = function (nums) {
  const { length } = nums;
  if (length < 3) return false;
  const stack = [];
  let s3 = -Infinity;
  for (let i = length - 1; i >= 0; i -= 1) {
    if (nums[i] < s3) return true;
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      s3 = stack[stack.length - 1];
      stack.pop();
    }
    stack.push(nums[i]);
  }
  return false;
};
// 2 / 5 + 3 / 5 + 4 / 5(2 + 3 + 4) / 5;
// console.log(find132pattern([2, 1, 1, 1])); sum/(count) =3
const oldRating = 3.51249;
const newRating = 5;
const count = 8;
//Math.round

let newnewRating = (oldRating * count + newRating) / (count + 1);
console.log("newnewRating", newnewRating);

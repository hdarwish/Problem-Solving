/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let nums = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'M':
        nums[i] = 1000;
        break;
      case 'D':
        nums[i] = 500;
        break;
      case 'C':
        nums[i] = 100;
        break;
      case 'L':
        nums[i] = 50;
        break;
      case 'X':
        nums[i] = 10;
        break;
      case 'V':
        nums[i] = 5;
        break;
      case 'I':
        nums[i] = 1;
        break;
    }
  }
  let sum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1])
      sum -= nums[i];

    else
      sum += nums[i];
  }
  return sum + nums[nums.length - 1];

};
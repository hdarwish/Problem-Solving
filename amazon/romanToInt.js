function romanToInt(s) {
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

}

const hash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};


function romanToInt2(s) {
  let l = s.length;
  let sum = 0;
  while (l--) {
    console.log('l', l, s[l], s[l + 1]);
    const n = hash[s[l]];
    sum += hash[s[l + 1]] > n ? -n : n;
  }
  return sum;
}
console.log(romanToInt2("MMCDXXXVIII"))
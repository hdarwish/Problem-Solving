/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const table = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  ["", "M", "MM", "MMM"]
  ];
  let result = '';
  let count = 0;
  while (num > 0) {
    let temp = num % 10;
    result = table[count][temp] + result;
    num = parseInt(num / 10);
    count++;
  }
  return result;
  //The basic idea is really simple: replace every digit in num by roman numerals.nnFor example,
  // we have a num: 2438.nn2 --> "MM"nn4 --> "CD"nn3 --> "XXX"nn8 --> "VIII"nnThen the result is "MMCDXXXVIII"."
};
console.log(intToRoman(3));
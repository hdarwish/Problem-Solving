'use strict';

// const take = (arr, n = 1) => arr.slice(0, n);
// const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
// function ExtraLongFactorial(n) {
//   let sum = [1];
//   // Length is half max length b/c we're multiplying
//   const MAX_LENGTH = Math.floor(String(Number.MAX_SAFE_INTEGER).length / 2) - 1;
//   const MAX_VALUE = Number(Array(MAX_LENGTH + 1).join("9"));
//   for (let i = 2; i <= n; i++) {
//     let carryover = 0;
//     for (let j = 0; j < sum.length; j++) {
//       let newValue = sum[j] * i + carryover;

//       if (newValue > MAX_VALUE) {
//         let newValueStr = String(newValue);
//         carryover = Number(
//           newValueStr.substr(0, newValueStr.length - MAX_LENGTH)
//         );
//         sum[j] = Number(newValueStr.substr(-MAX_LENGTH));
//       } else {
//         carryover = 0;
//         sum[j] = newValue;
//       }
//     }
//     if (carryover !== 0) sum.push(carryover);
//   }
//   // Don't left-pad the highest order group
//   let highestGroup = sum.pop();
//   // Left pad all other groups with '0'
//   sum = sum.map(v => Array(MAX_LENGTH + 1 - String(v).length).join("0") + v);
//   return highestGroup + sum.reverse().join("");
// }
let index = 5;
let strArr = new Array(index + 1);
strArr[index] = '';
strArr[--index] = 'd';
strArr[--index] = 's';
strArr[--index] = 'f';
strArr[--index] = 'a';
strArr[--index] = 'H';

console.log(0 || -1);
// console.log(take([1, 2, 3], 5)); // [1, 2, 3]
// take([1, 2, 3], 0); // []

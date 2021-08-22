/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  // const hm = new Map();
  // arr2.forEach(val => {
  //   hm.set(val, 0);
  // });
  // for (let i = 0; i < arr1.length; i++) {
  //   if (hm.has(arr1[i])) {
  //     let newVal = hm.get(arr1[i]);
  //     hm.set(arr1[i], ++newVal);
  //     arr1[i] = null;
  //   }
  // }
  // const sortedRemain = arr1.filter(Boolean).sort((a, b) => a - b);
  // let result = [];
  // for (let i = 0; i < arr2.length; i++) {
  //   const temp = new Array(hm.get(arr2[i])).fill(arr2[i]);
  //   result = [...result, ...temp];
  // }
  // return [...result, ...sortedRemain];
  let count = new Array(1001).fill(0);

  for (let num of arr1) {
    count[num]++;
  }

  let res = [];
  for (let num of arr2) {
    while (count[num] > 0) {
      res.push(num);
      count[num]--;
    }
  }

  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      res.push(i);
      count[i]--;
    }
  }

  return res;
};
console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
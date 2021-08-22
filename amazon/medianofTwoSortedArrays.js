/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // let l1 = nums1.length;
  // let l2 = nums2.length;
  // let l = l1 + l2;
  // if (l === 0) {
  //   return 0;
  // }
  // const m = l / 2;
  // const odd = l % 2;
  // const mi = m | 0;
  // const result = [];
  // while (m <= l--) {
  //   const n1 = nums1[l1 - 1];
  //   const n2 = nums2[l2 - 1];
  //   if (n2 === undefined || n2 < n1) {
  //     l1--;
  //     if (l <= mi) {
  //       result.push(n1);
  //     }
  //   } else {
  //     l2--;
  //     if (l <= mi) {
  //       result.push(n2);
  //     }
  //   }
  // }
  // return odd ? result[0] : (result[0] + result[1]) / 2;

  let m = nums1.length;
  let n = nums2.length;
  if (m > n) { // to ensure m<=n
    let temp = nums1; nums2 = B; B = temp;
    let tmp = m; m = n; n = tmp;
  }
  let iMin = 0, iMax = m, halfLen = parseInt((m + n + 1) / 2);
  while (iMin <= iMax) {
    let i = parseInt((iMin + iMax) / 2);
    let j = halfLen - i;
    if (i < iMax && nums2[j - 1] > nums1[i]) {
      iMin = i + 1; // i is too small
    }
    else if (i > iMin && nums1[i - 1] > nums2[j]) {
      iMax = i - 1; // i is too big
    }
    else { // i is perfect
      let maxLeft = 0;
      if (i == 0) { maxLeft = nums2[j - 1]; }
      else if (j == 0) { maxLeft = nums1[i - 1]; }
      else { maxLeft = Math.max(nums1[i - 1], nums2[j - 1]); }
      if ((m + n) % 2 === 1) { return maxLeft; }

      let minRight = 0;
      if (i == m) { minRight = nums2[j]; }
      else if (j == n) { minRight = nums1[i]; }
      else { minRight = Math.min(nums2[j], nums1[i]); }

      return (maxLeft + minRight) / 2.0;
    }
  }
  return 0.0;
};
console.log(findMedianSortedArrays([1, 2], [3, 4]))
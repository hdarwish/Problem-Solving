/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p = m + n;
  let p1 = m - 1, p2 = n - 1;
  while (p1 >= 0 || p2 >= 0) {
    let n1 = p1 >= 0 ? nums1[p1] : -Infinity;
    let n2 = p2 >= 0 ? nums2[p2] : -Infinity;
    if (n1 > n2) {
      nums1[--p] = n1;
      p1--;
    } else {
      nums1[--p] = n2;
      p2--;
    }
  }

};
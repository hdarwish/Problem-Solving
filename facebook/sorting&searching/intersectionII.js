/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Approach 1: Hash Map
For the previous problem, we used a hash set to achieve a linear time complexity. Here, we need to use a hash map to track the count for each number.

We collect numbers and their counts from one of the arrays into a hash map. Then, we iterate along the second array, and check if the number exists in the hash map and its count is positive. If so - add the number to the result and decrease its count in the hash map.

Hash Map Illustration

It's a good idea to check array sizes and use a hash map for the smaller array. It will reduce memory usage when one of the arrays is very large.

Algorithm

If nums1 is larger than nums2, swap the arrays.

For each element in nums1:

Add it to the hash map m.

Increment the count if the element is already there.
Initialize the insertion pointer (k) with zero.

Iterate along nums2:

If the current number is in the hash map and count is positive:

Copy the number into nums1[k], and increment k.

Decrement the count in the hash map.

Return first k elements of nums1.

Complexity Analysis

Time complexity: O(n+m), where nn and mm are the lengths of the arrays. We iterate through the first, and then through the second array; insert and lookup operations in the hash map take a constant time.

Space complexity: O(min(n,m)). We use hash map to store numbers (and their counts) from the smaller array.


 */

var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }
  let map = new Map();
  for (let n1 of nums1) {
    map.set(n1, (map.get(n1) || 0) + 1);
  }
  let k = 0;
  for (let n2 of nums2) {
    let cnt = map.get(n2) || 0;
    if (cnt > 0) {
      nums1[k++] = n2;
      map.set(n2, cnt - 1);
    }
  }
  return nums1.slice(0, k);

  //if sorted
  //   Algorithm

  //   Sort nums1 and nums2.

  //   Initialize i, j and k with zero.

  // Move indices i along nums1, and j through nums2:

  //   Increment i if nums1[i] is smaller.

  //   Increment j if nums2[j] is smaller.

  //   If numbers are the same, copy the number into nums1[k], and increment i, j and k.

  //   Return first k elements of nums1.
  // Complexity Analysis

  // Time complexity:  O(nlogn + mlogm), where nn and mm are the lengths of the arrays.We sort two arrays independently, and then do a linear scan.

  // Space complexity: O(1).We sort the arrays in -place.We ignore the space to store the output as it is not essential to the algorithm itself.
  // //// Arrays.sort(nums1);
  //// Arrays.sort(nums2);
  // let i = 0, j = 0, k = 0;
  // while (i < nums1.length && j < nums2.length) {
  //     if (nums1[i] < nums2[j]) {
  //         ++i;
  //     } else if (nums1[i] > nums2[j]) {
  //         ++j;
  //     } else {
  //         nums1[k++] = nums1[i++];
  //         ++j;
  //     }
  // }
  // return nums1.slice(0, k);
};
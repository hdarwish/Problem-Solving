/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * The idea is to convert both arrays into sets, and then iterate over the smallest set checking the presence of each element in the larger set.
 *  Time complexity of this approach is \mathcal{O}(n + m)O(n+m) in the average case.
 * 
 * Complexity Analysis

Time complexity : O(n+m), where n and m are arrays' lengths. 
O(n) time is used to convert nums1 into set, O(m) time is used to convert nums2, 
and contains/in operations are (1)O(1) in the average case.

Space complexity :O(m+n) in the worst case when all elements in the arrays are different.
 */
var intersection = function (nums1, nums2) {
  function set_intersection(set1, set2) {
    let output = [];
    for (let s of set1)
      if (set2.has(s)) output.push(s);

    return output;
  }


  let set1 = new Set([...nums1]);
  // for (Integer n : nums1) set1.add(n);
  let set2 = new Set([...nums2]);
  // for (Integer n : nums2) set2.add(n);

  if (set1.length < set2.length) return set_intersection(set1, set2);
  else return set_intersection(set2, set1);

};
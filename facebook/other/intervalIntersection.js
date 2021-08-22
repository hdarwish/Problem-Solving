/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  let ans = [];
  let i = 0, j = 0;

  while (i < A.length && j < B.length) {
    // Let's check if A[i] intersects B[j].
    // lo - the startpoint of the intersection
    // hi - the endpoint of the intersection
    let lo = Math.max(A[i][0], B[j][0]);
    let hi = Math.min(A[i][1], B[j][1]);
    if (lo <= hi)
      ans.push([lo, hi]);

    // Remove the interval with the smallest endpoint
    if (A[i][1] < B[j][1])
      i++;
    else
      j++;
  }

  return ans;
};
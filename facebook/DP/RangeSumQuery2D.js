/**
 * @param {number[][]} matrix
 * Approach #4 (Caching Smarter) [Accepted]
Algorithm

We used a cumulative sum array in the 1D version. 
We notice that the cumulative sum is computed with respect to the origin at index 0.
 Extending this analogy to the 2D case, we could pre-compute a cumulative region sum with respect to the origin at (0, 0)(0,0).
 Note that the region Sum(OA)Sum(OA) is covered twice by both Sum(OB)Sum(OB) and Sum(OC)Sum(OC).
  We could use the principle of inclusion-exclusion to calculate Sum(ABCD)Sum(ABCD) 
 as following:
Sum(ABCD) = Sum(OD) - Sum(OB) - Sum(OC) + Sum(OA) 

Complexity analysis

Time complexity :O(1) time per query, O(mn) time pre-computation. 
The pre-computation in the constructor takes O(mn)O(mn) time. Each sumRegion query takes O(1) time.

Space complexity : O(mn). The algorithm uses O(mn) space to store the cumulative region sum.

 */
let dp;
var NumMatrix = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return;
  dp = new Array(matrix.length + 1).fill(0).map(() => new Array(matrix[0].length + 1).fill(0));
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      dp[r + 1][c + 1] = dp[r + 1][c] + dp[r][c + 1] + matrix[r][c] - dp[r][c];
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return dp[row2 + 1][col2 + 1] - dp[row1][col2 + 1] - dp[row2 + 1][col1] + dp[row1][col1];
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
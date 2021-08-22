/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  // BFS, put `node`, `col` into queue at the same time
  //- Every left child access `col - 1` while right child  `col + 1`
  //- This maps `node` into different `col` buckets
  //- Get `col` boundary `min` and `max` on the fly
  //- Retrieve `result` from `cols` 

  let res = [];
  if (root == null) {
    return res;
  }
  let map = new Map();
  let q = [];
  let cols = [];
  q.push(root);
  cols.push(0);
  let min = 0;
  let max = 0;
  while (q.length) {
    let node = q.shift()
    let col = cols.shift();
    if (!map.has(col)) {
      map.set(col, []);
    }
    map.get(col).push(node.val);
    if (node.left !== null) {
      q.push(node.left);
      cols.push(col - 1);
      min = Math.min(min, col - 1);
    }
    if (node.right !== null) {
      q.push(node.right);
      cols.push(col + 1);
      max = Math.max(max, col + 1);
    }
  }
  for (let i = min; i <= max; i++) {
    res.push(map.get(i));
  }
  return res;

};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function (root, limit) {
  return dfs(root, limit, 0);
}
function dfs(node, limit, sum) {
  if (!node) {
    return null;
  }
  if (node.left === null && node.right === null) {
    return sum + node.val >= limit ? node : null;
  }
  let newSum = sum + node.val;
  node.left = dfs(node.left, limit, newSum);
  node.right = dfs(node.right, limit, newSum);
  return !node.left && !node.right ? null : node;


};

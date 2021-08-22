/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxValue;
function maxPathSum(root) {
  maxValue = Number.MIN_SAFE_INTEGER;
  maxPathDown(root);
  return maxValue;

}
function maxPathDown(node) {
  if (node === null) return 0;
  let left = Math.max(0, maxPathDown(node.left));
  let right = Math.max(0, maxPathDown(node.right));
  maxValue = Math.max(maxValue, left + right + node.val);
  return Math.max(left, right) + node.val;

}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root == null) return;
  let left = root.left;
  let right = root.right;
  root.left = null;
  flatten(left);
  flatten(right);
  root.right = left;
  let cur = root;
  while (cur.right != null) cur = cur.right;
  cur.right = right;
}
//This solution is based on recursion. We simply flatten left and right subtree and paste each sublist
//to the right child of the root. (don't forget to set left child to null
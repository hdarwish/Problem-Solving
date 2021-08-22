/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root, lower, upper) {
  let stack = [];
  let inorder = - Number.MAX_SAFE_INTEGER;

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // If next element in inorder traversal
    // is smaller than the previous one
    // that's not BST.
    if (root.val <= inorder) return false;
    inorder = root.val;
    root = root.right;
  }
  return true;

}

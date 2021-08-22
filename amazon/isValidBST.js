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
// var isValidBST = function (root) {
//   return helper(root, null, null);
// };
// function helper(node, lower, upper) {
//   if (node === null) return true;

//   let val = node.val;
//   if (lower !== null && val <= lower) return false;
//   if (upper !== null && val >= upper) return false;

//   if (!helper(node.right, val, upper)) return false;
//   if (!helper(node.left, lower, val)) return false;
//   return true;
// }

var isValidBST = function (root) {
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
};

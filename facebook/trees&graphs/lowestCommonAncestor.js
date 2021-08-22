/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans;
  function recurseTree(currentNode, p, q) {

    // If reached the end of a branch, return false.
    if (currentNode == null) {
      return false;
    }

    // Left Recursion. If left recursion returns true, set left = 1 else 0
    let left = recurseTree(currentNode.left, p, q) ? 1 : 0;

    // Right Recursion
    let right = recurseTree(currentNode.right, p, q) ? 1 : 0;

    // If the current node is one of p or q
    let mid = (currentNode == p || currentNode == q) ? 1 : 0;


    // If any two of the flags left, right or mid become True
    if (mid + left + right >= 2) {
      ans = currentNode;
    }

    // Return true if any one of the three bool values is True.
    return (mid + left + right > 0);
  }

  // Traverse the tree
  recurseTree(root, p, q);
  return ans;


};
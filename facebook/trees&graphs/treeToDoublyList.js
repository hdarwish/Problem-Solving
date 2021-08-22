/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return null;
  let first, last;
  helper(root);
  last.right = first;
  first.left = last;
  return first;

  function helper(node) {
    if (node !== null) {
      helper(node.left)
      if (last) {
        last.right = node;
        node.left = last;
      } else {
        first = node;
      }
      last = node;
      helper(node.right);
    };
  }
};
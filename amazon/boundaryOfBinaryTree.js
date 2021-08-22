/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var boundaryOfBinaryTree = function (root) {
  if (!root) return [];
  return [
    root.val,
    ...printLeftBoundry(root.left),
    ...printLeaves(root.left),
    ...printLeaves(root.right),
    ...printRightBoundry(root.right)
  ]
};
function printLeftBoundry(node, res = []) {
  if (!node || (!node.left && !node.right)) return res;
  res.push(node.val);
  if (!node.left) {
    printLeftBoundry(node.right, res);
  } else {
    printLeftBoundry(node.left, res);
  }
  return res;
}
function printRightBoundry(node, res = []) {
  if (!node || (!node.left && !node.right)) return res;

  if (!node.right) {
    printRightBoundry(node.left, res);
  } else {
    printRightBoundry(node.right, res);
  }
  res.push(node.val);
  return res;
}
function printLeaves(node, res = []) {
  if (!node) return res;
  if (!node.left && !node.right) res.push(node.val);
  printLeaves(node.left, res);
  printLeaves(node.right, res);
  return res;
}
// runtime: O(n)

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);
tree.right.left.right = new TreeNode(8);
tree.right.right.right = new TreeNode(9);


console.log(boundaryOfBinaryTree(tree));
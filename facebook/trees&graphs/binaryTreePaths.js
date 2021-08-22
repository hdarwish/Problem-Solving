/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  function construct_paths(root, path, paths) {
    if (root !== null) {
      path += root.val.toString();
      if ((root.left === null) && (root.right === null))  // if reach a leaf
        paths.push(path);  // update paths
      else {
        path += "->";  // extend the current path
        construct_paths(root.left, path, paths);
        construct_paths(root.right, path, paths);
      }
    }
  }


  let paths = [];
  construct_paths(root, "", paths);
  return paths;

};
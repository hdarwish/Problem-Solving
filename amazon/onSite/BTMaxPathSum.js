
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }

Algorithm

Now everything is ready to write down an algorithm.

Initiate max_sum as the smallest possible integer and call max_gain(node = root).
Implement max_gain(node) with a check to continue the old path / to start a new path:
Base case : if node is null, the max gain is 0.
Call max_gain recursively for the node children to compute max gain from the left and right subtrees: 
left_gain = max(max_gain(node.left), 0) and
right_gain = max(max_gain(node.right), 0).
Now check to continue the old path or to start a new path.
To start a new path would cost price_newpath = node.val + left_gain + right_gain.Update max_sum 
if it's better to start a new path.
For the recursion return the max gain the node and one / zero of its subtrees could add to the current path: 
node.val + max(left_gain, right_gain).

Complexity Analysis

Time complexity : O(N) where N is number of nodes, since we visit each node not more than 2 times.
Space complexity : O(log(N)). We have to keep a recursion stack of the size of the tree height,
 which is O(log(N)) for the binary tree.
*/
// function max_gain(node, max_sum) {
//   if (node === null) return 0;

//   // max sum on the left and right sub-trees of node
//   let left_gain = Math.max(max_gain(node.left), 0);
//   let right_gain = Math.max(max_gain(node.right), 0);

//   // the price to start a new path where `node` is a highest node
//   let price_newpath = node.val + left_gain + right_gain;

//   // update max_sum if it's better to start a new path
//   max_sum = Math.max(max_sum, price_newpath);

//   // for recursion :
//   // return the max gain if continue the same path
//   return node.val + Math.max(left_gain, right_gain);
// }
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

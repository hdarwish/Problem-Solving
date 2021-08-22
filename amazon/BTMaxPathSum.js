
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//int maxValue; \\n        \\n        public int maxPathSum(TreeNode root) { \\n            maxValue = Integer.MIN_VALUE; \\n            maxPathDown(root); \\n            return maxValue; \\n } \\n        \\n        private int maxPathDown(TreeNode node) { \\n            if (node == null) return 0; \\n            int left = Math.max(0, maxPathDown(node.left)); \\n            int right = Math.max(0, maxPathDown(node.right)); \\n            maxValue = Math.max(maxValue, left + right + node.val); \\n            return Math.max(left, right) + node.val; \\n } \\n    }"
function max_gain(node, max_sum) {
  if (node === null) return 0;

  // max sum on the left and right sub-trees of node
  let left_gain = Math.max(max_gain(node.left), 0);
  let right_gain = Math.max(max_gain(node.right), 0);

  // the price to start a new path where `node` is a highest node
  let price_newpath = node.val + left_gain + right_gain;

  // update max_sum if it's better to start a new path
  max_sum = Math.max(max_sum, price_newpath);

  // for recursion :
  // return the max gain if continue the same path
  return node.val + Math.max(left_gain, right_gain);
}
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

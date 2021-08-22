/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

function zigzagLevelOrder(root) {
  let results = [];
  if (!root) return results;
  // add the root element with a delimiter to kick off the BFS loop
  let queue = [root, null];
  let level_list = [];
  let is_order_left = true;
  while (queue.length) {
    let curr_node = queue.shift();
    if (curr_node) {
      if (is_order_left) {
        level_list.push(curr_node.val);
      }
      else {
        level_list.unshift(curr_node.val);
      }
      if (curr_node.left) queue.push(curr_node.left);
      if (curr_node.right) queue.push(curr_node.right);
    } else {
      // we finish the scan of one level
      results.push(level_list);
      level_list = [];
      // prepare for the next level
      if (queue.length) queue.push(null);
      is_order_left = !is_order_left;
    }
  }
  return results;
}

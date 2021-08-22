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
 * 
 * Approach #2 Breadth-First Search [Accepted]
Intuition

Much like depth-first search can guarantee that we visit a depth's rightmost node first,
 breadth-first search can guarantee that we visit it last.

Algorithm

By performing a breadth-first search that enqueues the left child before the right child,
 we visit each node in each layer from left to right. Therefore, by retaining only the most recently visited node per depth,
  we will have the rightmost node for each depth once we finish the tree traversal. 
  The algorithm is unchanged, other than swapping out the stack for a deque[1] and removing the containment 
  check before assigning into rightmost_value_at_depth.

Complexity Analysis

Time complexity : O(n).

The differences itemized in the Algorithm section do not admit differences in the time complexity analysis 
between the bread-first and depth-first search approaches.

Space complexity O(n).

Because breadth-first search visits the tree layer-by-layer, the queue will be at its largest immediately before visiting the largest layer.
 The size of this layer is 0.5n=O(n) in the worst case (a complete binary tree).


 */
var rightSideView = function (root) {
  let rightmostValueAtDepth = new Map();
  let max_depth = -1;

  /* These two stacks are always synchronized, providing an implicit
   * association values with the same offset on each stack. */
  let nodeStack = [];
  let depthStack = [];
  nodeStack.push(root);
  depthStack.push(0);

  while (nodeStack.length) {
    let node = nodeStack.pop();
    let depth = depthStack.pop();

    if (node !== null) {
      max_depth = Math.max(max_depth, depth);

      /* The first node that we encounter at a particular depth contains
      * the correct value. */
      if (!rightmostValueAtDepth.has(depth)) {
        rightmostValueAtDepth.set(depth, node.val);
      }

      nodeStack.push(node.left);
      nodeStack.push(node.right);
      depthStack.push(depth + 1);
      depthStack.push(depth + 1);
    }
  }

  /* Construct the solution based on the values that we end up with at the
   * end. */
  let rightView = [];
  for (let depth = 0; depth <= max_depth; depth++) {
    rightView.push(rightmostValueAtDepth.get(depth));
  }

  return rightView;


};
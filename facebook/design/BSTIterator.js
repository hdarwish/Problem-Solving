/*
Implement an iterator over a binary search tree (BST).
Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Note: next() and hasNext() should run in average O(1) time and uses O(h) memory,
where h is the height of the tree.
*/

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
let BSTIterator = function (root) {
  this.nodeStack = [];
  this.curNode = root;
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function () {
  return (this.curNode != null || this.nodeStack.length != 0);
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function () {
  while (this.curNode != null) {
    this.nodeStack.push(this.curNode);
    this.curNode = this.curNode.left;
  }
  this.curNode = this.nodeStack.pop();
  let node = this.curNode;
  this.curNode = this.curNode.right;

  return node.val;

};

/**
 * Your BSTIterator will be called like this:
 * let i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

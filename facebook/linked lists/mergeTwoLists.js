/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var mergeTwoLists = function (l1, l2) {
  // maintain an unchanging reference to node ahead of the return node.
  let prehead = new ListNode(-1);

  let prev = prehead;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // exactly one of l1 and l2 can be non-null at this point, so connect
  // the non-null list to the end of the merged list.
  prev.next = l1 === null ? l2 : l1;

  return prehead.next;
};
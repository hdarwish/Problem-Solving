/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) {
    return;
  };
  // step 1, find middile
  var slow = head,
    fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  var end = slow,
    head1 = slow.next;

  // reverse middle+1 to end
  var pre = null;
  while (head1) {
    var tmp = head1.next;
    head1.next = pre;
    pre = head1;
    head1 = tmp;
  }
  var head1 = pre;
  //cut between end and head1
  end.next = null;

  // join two lists 
  // list 1: head -> ... -> end -> null
  // list 2: head1 -> ... -> null

  while (head) {
    var tmp = head.next;
    head.next = head1;
    head = tmp;

    if (!head1) { break; }

    tmp = head1.next;
    head1.next = head;
    head1 = tmp;
  }

  return;

};
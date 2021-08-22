/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode[]} lists
 * @returns {ListNode}
 */

// assuming that the linklist is sorted in accending order
function ListNode(val) {
  this.val = val;
  this.next = null;
}

let merge = function (l1, l2) {
  if (!l1 || !l2) {
    if (!l1 && !l2) {
      return null;
    } else {
      return !l1 ? l2 : l1;
    }
  }
  let head = new ListNode(0), curNode = head;
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val <= l2.val) {
        curNode.next = l1;
        curNode = l1;
        l1 = l1.next;
      } else {
        curNode.next = l2;
        curNode = l2;
        l2 = l2.next;
      }
    } else if (l1) {
      curNode.next = l1;
      break;
    } else {
      curNode.next = l2;
      break;
    }
  }
  return head.next;
};

let mergeKLists = function (lists) {
  if (!lists.length) {
    return null;
  }
  if (lists.length === 1) {
    return lists[0];
  }
  let middle = Math.floor(lists.length / 2);
  let left = lists.slice(0, middle);
  let right = lists.slice(middle);
  return merge(mergeKLists(left), mergeKLists(right));
};

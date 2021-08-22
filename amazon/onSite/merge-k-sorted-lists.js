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
 * Approach 5: Merge with Divide And Conquer
Intuition & Algorithm

This approach walks alongside the one above but is improved a lot. We don't need to traverse most nodes many times repeatedly

Pair up \text{k}k lists and merge each pair.

After the first pairing, \text{k}k lists are merged into k/2k/2 lists with average 2N/k2N/k length, 
then k/4k/4, k/8k/8 and so on.

Repeat this procedure until we get the final sorted linked list.

Thus, we'll traverse almost NN nodes per pairing and merging, and repeat this procedure about \log_{2}{k}log 
2
​	
 k times.

 Complexity Analysis

Time complexity : O(N\log k)O(Nlogk) where \text{k}k is the number of linked lists.

We can merge two sorted linked list in O(n)O(n) time where nn is the total number of nodes in two lists.
Sum up the merge process and we can get: O\big(\sum_{i=1}^{log_{2}{k}}N \big)= O(N\log k)O(∑ 
i=1
log 
2
​	
 k
​	
 N)=O(Nlogk)
Space complexity : O(1)O(1)

We can merge two sorted linked lists in O(1)O(1) space.
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

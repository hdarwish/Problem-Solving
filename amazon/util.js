function ListNode(val) {
  this.val = val;
  this.next = null;
}

/*
 * create a linked list from an array, for example:
 * transfer [1, 2, 3, 4] 
 * to        1 -> 2 -> 3 -> 4 -> null
 */
function createLinkedList(arr) {
  const n = arr.length;
  if (n === 0) return null;
  let head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < n; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
}

function printLinkedList(head) {
  let cur = head, s = '';
  while (cur) {
    s += `${cur.val} -> `;
    cur = cur.next;
  }
  s += 'null';
  console.info(s);
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/*
 * create a binary tree  from an array, for example:
 * transfer [1, null, 2, 3] 
 * to         1
 *             \
 *              2
 *             /
 *            3
 * see https://leetcode.com/faq/
 * # What does [1,null,2,3] mean in binary tree representation?
 */
function createBinaryTree(arr) {
  const n = arr.length, queue = [];
  if (n === 0) return null;

  let root = new TreeNode(arr[0]), i = 1;
  queue.push(root);
  while (i < n) {
    let parent = queue.shift();
    let v = arr[i++];
    if (typeof v !== 'undefined' && v !== null) {
      parent.left = new TreeNode(v);
      queue.push(parent.left);
    }

    v = arr[i++];
    if (typeof v !== 'undefined' && v !== null) {
      parent.right = new TreeNode(v);
      queue.push(parent.right);
    }
  }

  return root;
}

function arrayBinaryTree(root) {
  const res = [];

  let node = root, queue = [root], count = 1;
  while (count) {
    node = queue.shift();
    if (node) {
      count--;
      res.push(node.val);
      queue.push(node.left, node.right);
      if (node.left) count++;
      if (node.right) count++;
    } else {
      res.push(null);
    }
  }
  return res;
}

module.exports = { createLinkedList, printLinkedList, ListNode, createBinaryTree, arrayBinaryTree, TreeNode };

// let t1 = createBinaryTree([1, null, 2, null, 3]);
// console.info(arrayBinaryTree(t1));
// let t2 = createBinaryTree([5, 3, 6, 2, 4, null, 7]);
// console.info(arrayBinaryTree(t2));
// let t3 = createBinaryTree([1,0,15,null,null,4,35,3,8,25,49,2,null,5,12,22,27,47,null,null,null,null,7,11,13,19,24,26,31,40,48,6,null,9,null,null,14,17,21,23,null,null,null,30,33,39,42,null,null,null,null,null,10,null,null,16,18,20,null,null,null,28,null,32,34,36,null,41,44,null,null,null,null,null,null,null,null,null,29,null,null,null,null,null,37,null,null,43,46,null,null,null,38,null,null,45]);
// console.info(arrayBinaryTree(t3));

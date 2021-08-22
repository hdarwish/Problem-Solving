/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */




// HashMap which holds old nodes as keys and new nodes as its values.
//HashMap<Node, Node> visitedHash = new HashMap<Node, Node>();
let visitedHash = new Map();
var copyRandomList = function (head) {

  if (head === null) {
    return null;
  }

  // If we have already processed the current node, then we simply return the cloned version of
  // it.
  if (visitedHash.has(head)) {
    return visitedHash.get(head);
  }

  // Create a new node with the value same as old node. (i.e. copy the node)
  let node = new Node(head.val, null, null);

  // Save this value in the hash map. This is needed since there might be
  // loops during traversal due to randomness of random pointers and this would help us avoid
  // them.
  visitedHash.set(head, node);

  // Recursively copy the remaining linked list starting once from the next pointer and then from
  // the random pointer.
  // Thus we have two independent recursive calls.
  // Finally we update the next and random pointers for the new node created.
  node.next = copyRandomList(head.next);
  node.random = copyRandomList(head.random);

  return node;
};
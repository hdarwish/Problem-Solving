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
 * Complexity Analysis

Time Complexity: O(N) where N is the number of nodes in the linked list.
Space Complexity: O(N). If we look closely, we have the recursion stack and 
we also have the space complexity to keep track of nodes already cloned i.e. using the visited dictionary.
 But asymptotically, the complexity is O(N).
 */

    

//Approach 1: recursive
// HashMap which holds old nodes as keys and new nodes as its values.
  //HashMap<Node, Node> visitedHash = new HashMap<Node, Node>();
let  visitedHash = new Map();
var copyRandomList = function(head) {

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

 //Approach 2: Iterative with O(N) Space
 //Complexity Analysis
//Time Complexity : O(N) because we make one pass over the original linked list.
//Space Complexity : O(N) as we have a dictionary containing mapping from old list nodes to new list nodes.
// Since there are N nodes, we have O(N) space complexity.
 let visited = new Map();

  function getClonedNode(node) {
    // If the node exists then
    if (node !== null) {
      // Check if the node is in the visited dictionary
      if (visited.has(node)) {
        // If its in the visited dictionary then return the new node reference from the dictionary
        return visited.get(node);
      } else {
        // Otherwise create a new node, add to the dictionary and return it
        visited.set(node, new Node(node.val, null, null));
        return visited.get(node);
      }
    }
    return null;
  }

 function copyRandomList2(head) {

    if (head === null) {
      return null;
    }

    let oldNode = head;

    // Creating the new head node.
    let newNode = new Node(oldNode.val);
    visited.set(oldNode, newNode);

    // Iterate on the linked list until all nodes are cloned.
    while (oldNode !== null) {
      // Get the clones of the nodes referenced by random and next pointers.
      newNode.random = getClonedNode(oldNode.random);
      newNode.next = getClonedNode(oldNode.next);

      // Move one step ahead in the linked list.
      oldNode = oldNode.next;
      newNode = newNode.next;
    }
    return visited.get(head);
  }

//Approach 3: Iterative with O(1) Space
 function copyRandomList3(head) {

    if (head === null) {
      return null;
    }

    // Creating a new weaved list of original and copied nodes.
    let ptr = head;
    while (ptr !== null) {

      // Cloned node
      let newNode = new Node(ptr.val);

      // Inserting the cloned node just next to the original node.
      // If A->B->C is the original linked list,
      // Linked list after weaving cloned nodes would be A->A'->B->B'->C->C'
      newNode.next = ptr.next;
      ptr.next = newNode;
      ptr = newNode.next;
    }

    ptr = head;

    // Now link the random pointers of the new nodes created.
    // Iterate the newly created list and use the original nodes' random pointers,
    // to assign references to random pointers for cloned nodes.
    while (ptr !== null) {
      ptr.next.random = (ptr.random !== null) ? ptr.random.next : null;
      ptr = ptr.next.next;
    }

    // Unweave the linked list to get back the original linked list and the cloned list.
    // i.e. A->A'->B->B'->C->C' would be broken to A->B->C and A'->B'->C'
    let ptr_old_list = head; // A->B->C
    let ptr_new_list = head.next; // A'->B'->C'
    let head_copy = head.next;
    while (ptr_old_list !== null) {
      ptr_old_list.next = ptr_old_list.next.next;
      ptr_new_list.next = (ptr_new_list.next != null) ? ptr_new_list.next.next : null;
      ptr_old_list = ptr_old_list.next;
      ptr_new_list = ptr_new_list.next;
    }
    return head_copy;
  }
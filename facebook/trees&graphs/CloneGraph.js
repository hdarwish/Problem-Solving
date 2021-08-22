/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (node == null) {
    return node;
  }

  // Hash map to save the visited node and it's respective clone
  // as key and value respectively. This helps to avoid cycles.
  let visited = new Map();

  // Put the first node in the queue
  let queue = [];
  queue.push(node);
  // Clone the node and put it in the visited dictionary.
  visited.set(node, new Node(node.val, []));

  // Start BFS traversal
  while (queue.length) {
    // Pop a node say "n" from the from the front of the queue.
    let n = queue.shift();
    // Iterate through all the neighbors of the node "n"
    for (let neighbor of n.neighbors) {
      if (!visited.has(neighbor)) {
        // Clone the neighbor and put in the visited, if not present already
        visited.set(neighbor, new Node(neighbor.val, []));
        // Add the newly encountered node to the queue.
        queue.push(neighbor);
      }
      // Add the clone of the neighbor to the neighbors of the clone node "n".
      visited.get(n).neighbors.push(visited.get(neighbor));
    }
  }

  // Return the clone of the node from visited.
  return visited.get(node);
};
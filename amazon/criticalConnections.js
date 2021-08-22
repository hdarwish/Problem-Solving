/**
 * There are n servers numbered from 0 to n - 1 connected by undirected server - to - server connections forming a network where connections[i] = [a, b]
represents a connection between servers a and b.Any server can reach any other server directly or indirectly through the network.
A critical connection is a connection that, if removed, will make some server unable to reach some other server.
Return all critical connections in the network in any order.
  Example 1:
Input: n = 4, connections = [[0, 1], [1, 2], [2, 0], [1, 3]]
Output: [[1, 3]]
Explanation: [[3, 1]] is also accepted.
  Constraints:
1 <= n <= 10 ^ 5
n - 1 <= connections.length <= 10 ^ 5
connections[i][0] != connections[i][1]
There are no repeated connections.

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
let criticalConnections = function (n, connections) {

  let time = 0;
  let adj = [];
  const NIL = -1;
  let bridges = [];
  let disc = [], low = [], parent = [], visited = [];
  // initialize parent, visited, ap, disc, and low
  for (let i = 0; i < n; i++) {
    parent.push(NIL);
    visited.push(false);
    disc.push(0);
    low.push(Number.MAX_SAFE_INTEGER);
    adj.push([]);
  }
  // populate the adj list
  connections.forEach(edge => {
    adj[edge[0]].push(edge[1]);
    adj[edge[1]].push(edge[0]);
  });
  // call the recursive helper function to find articulation points in DFS tree rooted with vertex 'i'
  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      bridgeUtil(i, visited, disc, low, parent, bridges);
    }
  }

  // now bridges contains a list of bridges
  return bridges;

  function bridgeUtil(u, visited, disc, low, parent, bridges) {
    console.log('(v, visited, disc, low, parent, bridges)', u, visited, disc, low, parent, bridges);
    // mark the current vertex as visited
    visited[u] = true;
    // initialize discovery time and low value
    disc[u] = low[u] = ++time;
    adj[u].forEach(v => {
      if (!visited[v]) {
        console.log('!visited[v]', v, u);
        parent[v] = u;
        bridgeUtil(v, visited, disc, low, parent, bridges);

        low[u] = Math.min(low[u], low[v]);

        // If the lowest vertex reachable from subtree
        // under v is below u in DFS tree, then u-v is
        // a bridge
        if (low[v] > disc[u]) {
          console.log('critical', v, u, low, disc);
          bridges.push([u, v]);
        }
      } else if (v !== parent[u]) {
        console.log('visited[v] && v !== parent[u]', v, u);
        low[u] = Math.min(low[u], disc[v]);
      }
    })
  }

};

let n = 6;
let connections = [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4], [4, 5], [5, 3]];

let n2 = 4;
let connections2 = [[0, 1], [1, 2], [2, 0], [1, 3]];
console.log(criticalConnections(n, connections));
console.log(criticalConnections(n2, connections2));
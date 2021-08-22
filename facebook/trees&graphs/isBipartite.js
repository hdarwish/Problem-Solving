/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  let n = graph.length;
  let color = new Array(n).fill(-1);

  for (let start = 0; start < n; ++start) {
    if (color[start] === -1) {
      let stack = [];
      stack.push(start);
      color[start] = 0;

      while (stack.length) {
        let node = stack.pop();
        for (let nei of graph[node]) {
          if (color[nei] === -1) {
            stack.push(nei);
            color[nei] = color[node] ^ 1;
          } else if (color[nei] === color[node]) {
            return false;
          }
        }
      }
    }
  }

  return true;

};
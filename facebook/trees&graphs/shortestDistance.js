/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function (grid) {
  if (grid === null || grid.length == 0) return -1;
  let m = grid.length;
  let n = grid[0].length;
  let dist = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let nums = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let buildingNum = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        buildingNum++;
        bfs(grid, i, j, dist, nums);
      }
    }
  }

  let res = Number.MAX_VALUE;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 0 && dist[i][j] !== 0 && nums[i][j] == buildingNum) {
        res = Math.min(res, dist[i][j]);
      }
    }
  }
  return res === Number.MAX_VALUE ? -1 : res;

};
function bfs(grid, row, col, dist, nums) {
  let m = grid.length;
  let n = grid[0].length;

  let queue = [];
  queue.push([row, col]);

  let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let visited = new Array(m).fill(false).map(() => new Array(n).fill(false));
  let distance = 0;

  while (queue.length) {
    distance++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let cur = queue.shift();
      for (let k = 0; k < dirs.length; k++) {
        let x = cur[0] + dirs[k][0];
        let y = cur[1] + dirs[k][1];
        if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y] && grid[x][y] === 0) {
          visited[x][y] = true;
          dist[x][y] += distance;
          nums[x][y]++;
          queue.push([x, y]);
        }
      }
    }
  }


}
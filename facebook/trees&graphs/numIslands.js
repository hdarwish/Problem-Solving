/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid === null || !grid.length) {
    return 0;
  }

  let nr = grid.length;
  let nc = grid[0].length;
  let num_islands = 0;

  for (let r = 0; r < nr; ++r) {
    for (let c = 0; c < nc; ++c) {
      if (grid[r][c] == '1') {
        ++num_islands;
        grid[r][c] = '0'; // mark as visited
        let neighborsQueue = [];
        neighborsQueue.push(r * nc + c);
        while (neighborsQueue.length) {
          let id = neighborsQueue.shift();
          let row = parseInt(id / nc);
          let col = id % nc;
          if (row - 1 >= 0 && grid[row - 1][col] == '1') {
            neighborsQueue.push((row - 1) * nc + col);
            grid[row - 1][col] = '0';
          }
          if (row + 1 < nr && grid[row + 1][col] == '1') {
            neighborsQueue.push((row + 1) * nc + col);
            grid[row + 1][col] = '0';
          }
          if (col - 1 >= 0 && grid[row][col - 1] == '1') {
            neighborsQueue.push(row * nc + col - 1);
            grid[row][col - 1] = '0';
          }
          if (col + 1 < nc && grid[row][col + 1] == '1') {
            neighborsQueue.push(row * nc + col + 1);
            grid[row][col + 1] = '0';
          }
        }
      }
    }
  }

  return num_islands;
}
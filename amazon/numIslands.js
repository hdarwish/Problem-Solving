/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid === null || grid.length === 0) return 0;
  let nr = grid.length;
  let nc = grid[0].length;
  let totalIslands = 0;
  for (let i = 0; i < nr; i++) {
    for (let j = 0; j < nc; j++) {
      if (grid[i][j] === '1') {
        totalIslands++;
        dfs(grid, i, j);
      }
    }
  }
  return totalIslands;
};
function dfs(grid, r, c) {

  let nr = grid.length;
  let nc = grid[0].length;
  if (r < 0 || r >= nr || c < 0 || c >= nc || grid[r][c] === '0') {
    return;
  }
  grid[r][c] = '0'
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

console.log(numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]))
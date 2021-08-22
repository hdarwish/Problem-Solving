function numberAmazonGoStores(rows, column, grid) {
  if (grid === null || grid.length === 0) return 0;
  let totalStores = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 1) {
        totalStores++;
        dfs(grid, i, j);
      }
    }
  }
  return totalStores;
}
function dfs(grid, r, c) {

  let nr = grid.length;
  let nc = grid[0].length;
  if (r < 0 || r >= nr || c < 0 || c >= nc || grid[r][c] === 0) {
    return;
  }
  grid[r][c] = 0
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

function Point(r, c) {
  this.r = r;
  this.c = c;
}
function minimumHours(rows, columns, grid) {
  let q = [];
  let target = rows * columns;
  let cnt = 0, res = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (grid[r][c] === 1) {
        q.push(new Point(r, c));
        cnt++;
      }
    }
  }

  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];
  //BFS
  while (q.length) {
    let size = q.length;
    if (cnt === target) {
      return res;
    }
    for (let i = 0; i < size; i++) {
      let cur = q.shift();
      for (let dir of dirs) {
        let r = cur.r + dir[0];
        let c = cur.c + dir[1];

        if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length
          && grid[r][c] === 0) {
          cnt++;
          q.push(new Point(r, c));
          grid[r][c] = 1;

        }
      }
    }
    res++;
  }
  return -1;
}
// FUNCTION SIGNATURE ENDS
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function (maze, start, destination) {
  let distances = new Array(maze.length);
  let moves = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  for (let i = 0; i < maze.length; i++) {
    distances[i] = new Array(maze[0].length).fill(Number.MAX_VALUE);
  }
  let q = [];
  q.unshift(start);
  distances[start[0]][start[1]] = 0;
  while (q.length) {
    let pos = q.pop();
    for (let move of moves) {
      let x = move[0] + pos[0];
      let y = move[1] + pos[1];
      let count = 0;
      while (x >= 0 && x < maze.length && y >= 0 && y < maze[0].length &&
        maze[x][y] === 0) {
        x += move[0];
        y += move[1];
        count++;
      }
      x -= move[0]; y -= move[1];
      if (distances[pos[0]][pos[1]] + count < distances[x][y]) {
        let point = [x, y]
        distances[x][y] = distances[pos[0]][pos[1]] + count;
        q.unshift(point);
      }
    }

  }
  return distances[destination[0]][destination[1]] !== Number.MAX_VALUE ? distances[destination[0]][destination[1]] : -1;
};
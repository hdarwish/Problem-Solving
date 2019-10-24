'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}
// Complete the countLuck function below.
function countLuck(matrix, k) {
  let count = {
    cnt: 0
  };
  const bx = matrix.length
  const by = matrix[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let mx, my;
  for (let i = 0; i < bx; i++) {
    for (let j = 0; j < by; j++) {
      if (matrix[i][j] === 'M') {
        mx = i;
        my = j;
      }
    }
  }
  dfs(matrix, bx, by, dx, dy, count, mx, my);
  return (count.cnt === k) ? 'Impressed' : 'Oops!';
}

function dfs(matrix, bx, by, dx, dy, count, x, y, px = -1, py = -1) {
  //base case
  if (matrix[x][y] === '*') {
    return 1;
  }
  let cc = 0;
  let fl = 0;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (!norm(nx, ny, bx, by)) {
      continue;
    }
    if (nx === px && ny === py) {
      continue;
    }
    if (matrix[nx][ny] == 'X')
      continue;
    if (dfs(matrix, bx, by, dx, dy, count, nx, ny, x, y) === 1) {
      fl = 1;
    }
    cc++;
  }
  if (fl && cc > 1) {
    count.cnt++;
  }
  return fl;
}

function norm(x, y, bx, by) {
  return (x >= 0 && x < bx && y >= 0 && y < by) ? true : false;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let matrix = [];

    for (let i = 0; i < n; i++) {
      const matrixItem = readLine();
      matrix.push(matrixItem);
    }

    const k = parseInt(readLine(), 10);

    let result = countLuck(matrix, k);

    ws.write(result + "\n");
  }

  ws.end();
}
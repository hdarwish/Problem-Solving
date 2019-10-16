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

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
  let m = new Array(k).fill(0);
  for (let i = 0; i < n; i++) {
    m[ar[i] % k]++;
  }
  let sum = 0;
  sum += (m[0] * (m[0] - 1)) / 2;
  for (let i = 1; i <= k / 2 && i !== k - i; i++) {
    sum += m[i] * m[k - i];
  }
  if (k % 2 === 0) {
    sum += (m[k / 2] * (m[k / 2] - 1)) / 2;
  }
  return sum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(' ');

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

  let result = divisibleSumPairs(n, k, ar);

  ws.write(result + "\n");

  ws.end();
}
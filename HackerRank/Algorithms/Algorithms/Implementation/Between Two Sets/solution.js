'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
function gcd2(a, b) {
  while (b > 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm2(a, b) {
  return a * (b / gcd2(a, b));
}

function gcd(input) {
  let result = input[0];
  for (let i = 1; i < input.length; i++) {
    result = gcd2(result, input[i]);
  }
  return result;
}

function lcm(input) {
  let result = input[0];
  for (let i = 1; i < input.length; i++) {
    result = lcm2(result, input[i]);
  }
  return result;
}

function getTotalX(a, b) {
  // Write your code here
  // 1. find the LCM of all the integers of array A.
  //2. find the GCD of all the integers of array B.
  //3. Count the number of multiples of LCM that evenly divides the GCD.
  let count = 0;
  const f = lcm(a);
  const l = gcd(b);
  for (let i = f, j = 2; i <= l; i = f * j, j++) {
    if (l % i === 0) {
      count++;
    }
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

  const total = getTotalX(arr, brr);

  ws.write(total + '\n');

  ws.end();
}
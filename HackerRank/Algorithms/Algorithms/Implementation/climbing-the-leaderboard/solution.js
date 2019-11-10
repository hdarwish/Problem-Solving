//https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
  let results = [];
  let ranks = new Array(scores.length);
  for (let i = 0, rank = 1; i < scores.length; i++) {
    if (i > 0 && scores[i - 1] !== scores[i]) {
      rank++;
    }
    ranks[i] = rank;
  }
  //Set alice rank it to worst rank+1
  let aliceRank = ranks[ranks.length - 1] + 1;
  let leaderBoardIndex = scores.length - 1;
  let prevScore = -1;
  for (let aliceScoreIndex = 0; aliceScoreIndex < alice.length; aliceScoreIndex++) {
    for (let i = leaderBoardIndex; i >= -1; i--) {
      if (i < 0 || scores[i] > alice[aliceScoreIndex]) {
        results.push(aliceRank);
        break;
      } else if (scores[i] < alice[aliceScoreIndex]) {
        if (scores[i] !== prevScore) {
          aliceRank--;
        }
        leaderBoardIndex--;
      } else {
        leaderBoardIndex--;
        aliceRank = ranks[i];
      }
      prevScore = scores[i];
    }
  }
  return results;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const scoresCount = parseInt(readLine(), 10);

  const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

  const aliceCount = parseInt(readLine(), 10);

  const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

  let result = climbingLeaderboard(scores, alice);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
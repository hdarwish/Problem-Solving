"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.on("SIGINT", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
  process.exit();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the steadyGene function below.
function steadyGene(gene) {}
function validityCheck(dict, limit) {
  if (
    dict.get("A") <= limit &&
    dict.get("C") <= limit &&
    dict.get("G") <= limit &&
    dict.get("T") <= limit
  ) {
    return true;
  } else {
    return false;
  }
}

function steadyGene(n, str) {
  //   const n = parseInt(readLine(), 10);
  //   const str = readLine();
  const limit = n / 4;
  let maxIndex = 0,
    out = 999999;
  let geneArr = [["A", 0], ["C", 0], ["G", 0], ["T", 0]];
  let dict = new Map(geneArr);

  for (let i = n - 1; i >= 0; i--) {
    //dict[str[i]]++;
    dict.set(str[i], dict.get(str[i]) + 1);
    if (!validityCheck(dict, limit)) {
      maxIndex = i + 1;
      //dict[str[i]]--;
      dict.set(str[i], dict.get(str[i]) - 1);
      break;
    }
  }
  for (
    let minIndex = -1;
    minIndex < n - 1 && maxIndex < n && minIndex < maxIndex;
    minIndex++
  ) {
    while (!validityCheck(dict, limit) && maxIndex < n) {
      // dict[str[maxIndex]]--;
      dict.set(str[maxIndex], dict.get(str[maxIndex]) - 1);
      maxIndex++;
    }
    if (maxIndex > n || !validityCheck(dict, limit)) {
      break;
    }
    let substringLength = Math.max(0, maxIndex - minIndex - 1);
    if (substringLength < out) {
      out = substringLength;
    }
    // dict[str[minIndex + 1]]++;
    dict.set(str[minIndex + 1], dict.get(str[minIndex + 1]) + 1);
  }

  //let result = steadyGene(str);

  console.log(out + "\n");
}
steadyGene(8, "ACGTTGCA");

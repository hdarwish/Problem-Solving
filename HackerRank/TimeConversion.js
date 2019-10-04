"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .trim()
    .split("\n")
    .map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  let sArr = s.split(":");
  let hrn = Number(sArr[0]);
  let hrs = sArr[0];
  if (s[s.length - 2] === "P") {
    if (hrs !== "12") {
      hrn += 12;
    }
    hrs = hrn.toString();
    if (hrs.length === 1) {
      hrs = "0".concat(hrs);
    }
  } else {
    if (hrs === "12") {
      hrs = "00";
    }
  }
  return hrs.concat(":", sArr[1]).concat(":", sArr[2].slice(0, 2));
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}

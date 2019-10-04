"use strict";

// Complete the permutationEquation function below.
function permutationEquation(p) {
  let mp = new Map();
  let result = [];
  for (let i = 1; i <= p.length; i++) mp.set(p[i - 1], i);
  console.log(mp);
  for (let i = 1; i <= p.length; i++) result.push(mp.get(mp.get(i)));
  console.log(result);
  return result;
}

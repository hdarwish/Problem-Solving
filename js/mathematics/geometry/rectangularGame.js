function solve(steps) {
  let x = [];
  let y = [];
  for (let input of steps) {
    x.push(input[0]);
    y.push(input[1]);
  }
  return Math.min(...x) * Math.min(...y);
}

console.log(solve([[2, 3], [3, 7], [4, 1]]));

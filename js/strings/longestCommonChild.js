function commonChild(s1, s2) {
  let C = new Array(s1.length + 1).fill().map(() => new Array(s2.length + 1).fill(0));
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        C[i + 1][j + 1] = C[i][j] + 1;
      } else {
        C[i + 1][j + 1] = Math.max(C[i + 1][j], C[i][j + 1]);
      }
    }
  }
  console.log(C);
  return C[s1.length][s2.length];
}
console.log(commonChild('hafsd', 'hafs'));

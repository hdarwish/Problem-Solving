// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//X B X   D X F G   H I J
//A B C   D E F G   H I J
function solution(N, S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (S) {
    const rows = new Array(N).fill(2);
    const rowsisles = new Array(N);
    for (let i = 0; i < rowsisles.length; i++) {
      rowsisles[i] = new Array(3).fill(1);
    }
    S.split(' ').forEach(res => {
      const row = res.split('')[0] - 1;
      const seat = res.split('')[1];
      if (['B', 'C'].includes(seat)) {
        rowsisles[row][0] = 0;
      }
      if (['D', 'E'].includes(seat)) {
        rowsisles[row][0] = 0;
        rowsisles[row][1] = 0;
      }
      if (['F', 'G'].includes(seat)) {
        rowsisles[row][1] = 0;
        rowsisles[row][2] = 0;
      }
      if (['H', 'I'].includes(seat)) {
        rowsisles[row][2] = 0;
      }

      if (rowsisles[row][0] + rowsisles[row][1] + rowsisles[row][2] === 3) {
        rows[row] = 2;
      } else if (rowsisles[row][0] + rowsisles[row][1] + rowsisles[row][2] >= 1) {
        rows[row] = 1;
      } else {
        rows[row] = 0;
      }
      console.log(rowsisles, rows);
    });
    const ans = rows.reduce((tot, val) => {
      return tot + val;
    });
    return ans;
  } else {
    return N * 2;
  }
}
console.log(solution(2, '1A 1C 1E'));

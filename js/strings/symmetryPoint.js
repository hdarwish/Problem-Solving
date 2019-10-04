function solution(S) {
  // write your code in JavaScript (Node.js 4.0.0)

  if (S.length % 2 === 0) {
    return -1;
  }

  var mid = (S.length - 1) / 2;
  var i = 0;

  for (i = 1; i <= mid; i++) {
    if (S.charAt(mid - i) != S.charAt(mid + i)) {
      return -1;
    }
  }

  return mid;
}

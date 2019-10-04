function solution(A) {
  var length = A.length;
  // console.log(length);
  var sum = ((length + 1) / 2) * (length + 2);
  console.log(sum);
  var sumMinusMissing = length * ((length + 1) / 2);
  // for (i = 0; i < length; i++) {
  // sumMinusMissing += A[i];
  // }
  console.log(sumMinusMissing);
  return sum - sumMinusMissing - 1;
}
console.log(solution([2, 5, 1, 4, 6]));

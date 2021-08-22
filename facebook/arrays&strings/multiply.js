/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let arrA = num1.split('').reverse();
  let arrB = num2.split('').reverse();
  let zeros = '';
  let results = [];
  while (arrA[0] === 0) {
    zeros += '0';
    arrA.shift();
  }
  while (arrB[0] === 0) {
    zeros += '0';
    arrB.shift();
  }
  for (let i = 0; i < arrA.length; i++) {
    arrA[i] = parseInt(arrA[i]);
    results.push(0);
  }
  for (let i = 0; i < arrB.length; i++) {
    arrB[i] = parseInt(arrB[i]);
    results.push(0);
  }
  let curry;
  for (let i = 0; i < arrA.length; i++) {
    curry = 0;
    for (let j = 0; j < arrB.length; j++) {
      let exist = results[i + j];
      results[i + j] = (arrA[i] * arrB[j] + exist + curry) % 10;
      curry = Math.floor((arrA[i] * arrB[j] + exist + curry) / 10);
    }
    if (curry > 0) {
      results[i + arrB.length] += curry;
    }
  }
  console.log('results', results)
  let newResults = results.reverse();
  while (newResults[0] === 0) {
    newResults.shift();
  }
  return newResults.length ? newResults.join('').concat(zeros) : '0';


};
console.log(multiply('0', '0'))
//Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.
function makeAnagram(a, b) {
  let arr = new Array(26).fill(0);
  // console.log(arr);
  a.split('').forEach(ch => {
    arr[ch.charCodeAt(0) - 97]++;
  });
  // console.log(arr);
  b.split('').forEach(ch => {
    arr[ch.charCodeAt(0) - 97]--;
  });
  let count = 0;
  console.log(arr);
  arr.forEach(val => {
    count += Math.abs(val);
  });
  return count;
}
console.log(makeAnagram('abc', 'cdeb'));

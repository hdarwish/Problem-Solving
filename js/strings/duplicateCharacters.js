//check using Array some
let text = 'test'.split('');
const isRepeat = text.some((v, i, a) => {
  return a.lastIndexOf(v) != i;
});
console.log(isRepeat);

//check using recursion
function checkString(text, index) {
  if (text.length - index === 0) {
    //stop condition
    return false;
  } else {
    return checkString(text, index + 1) || text.substr(0, index).indexOf(text[index]) != -1;
  }
}

// example Data to test
var texts = ['test', 'rest', 'why', 'puss'];

for (var idx in texts) {
  var txt = texts[idx];
  console.log(txt, ' ->', checkString(txt, 0));
}

//return duplicates using hash
const str = 'afewreociwddwjej';
function findRepeat(str) {
  const arr = str.split('');
  const hash = new Map();
  const result = [];
  // If repeat the value is false, if no repeat the value is true
  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i]) === undefined) {
      hash.set(arr[i], true);
    } else {
      const value = hash.get(arr[i]);
      if (value) {
        hash.set(arr[i], !value);
      }
    }
  }
  hash.forEach((v, k) => {
    if (!v) result.push(k);
  });
  return result;
}
console.log(...findRepeat(str));

//return duplicates using regex
function howManyRepeated(str) {
  const result = [];
  const strArr = str
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .match(/(.)\1+/g);

  if (strArr != null) {
    strArr.forEach(elem => {
      result.push(elem[0]);
    });
  }
  return result;
}
console.log(...howManyRepeated(str));

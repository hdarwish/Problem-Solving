//find if characters appear with same freq in initial or by removing single char
function isValid(s) {
  let charFreqs = new Map();
  let freqFreqs = new Map();
  let onescount = 0;
  for (let ch of s) {
    let freq = charFreqs.get(ch) || 0;

    charFreqs.set(ch, ++freq);
  }
  for (let [key, value] of charFreqs) {
    let freqfreq = freqFreqs.get(value) || 0;
    freqFreqs.set(value, ++freqfreq);
  }
  console.log(charFreqs);
  console.log(freqFreqs);
  for (let [key, value] of freqFreqs) {
    console.log(key, value);
    if (value === 1) onescount++;
  }
  var mapIter = freqFreqs.keys();
  var mapIterv = freqFreqs.values();
  let first = mapIter.next().value;
  let firstv = mapIterv.next().value;
  let second = mapIter.next().value;
  let secondv = mapIterv.next().value;
  console.log(freqFreqs.size, onescount);
  if (
    freqFreqs.size === 1 ||
    (freqFreqs.size === 2 &&
      onescount === 1 &&
      (Math.abs(first - second) === 1 || (first === 1 && firstv === 1) || (second === 1 && secondv === 1)))
  ) {
    return 'YES';
  }
  return 'NO';
}
console.log(isValid('abcdefghhgfedecba'));

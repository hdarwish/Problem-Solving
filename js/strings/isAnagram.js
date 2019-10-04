function compare(a, b) {
  var y = a
      .split('')
      .sort()
      .join(''),
    z = b
      .split('')
      .sort()
      .join('');
  console.log(a + ' and ' + b + ' are ' + (z === y ? 'anagrams!' : 'not anagrams.'));
}

compare('abc', 'cba');

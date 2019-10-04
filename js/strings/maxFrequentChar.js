var exp = 'hafsdarwishmohamedibrahim';
var expCounts = {};
var maxKey = '';
for (var i = 0; i < exp.length; i++) {
  var key = exp[i];
  if (!expCounts[key]) {
    expCounts[key] = 0;
  }
  expCounts[key]++;
  if (maxKey == '' || expCounts[key] > expCounts[maxKey]) {
    maxKey = key;
  }
}
console.debug(expCounts);
console.debug(maxKey + ':' + expCounts[maxKey]);

//another solution
var getMax = function(str) {
  var max = 0,
    maxChar = '';
  str.split('').forEach(function(char) {
    if (str.split(char).length > max) {
      max = str.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
};

//using filter
function removeDuplicateCharacters(string) {
  return string
    .split('')
    .filter((item, pos, self) => {
      return self.indexOf(item) === pos;
    })
    .join('');
}
console.log(removeDuplicateCharacters('baraban'));

//using set
function removeDuplicates(str) {
  return [...new Set(str.split(''))].join('');
}
console.log(removeDuplicates('baraban'));

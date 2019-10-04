//inplace for simple ascii
function reverse(s) {
  return s
    .split('')
    .reverse()
    .join('');
}

//using recursion

function revrev(str) {
  if (str === '') {
    return '';
  } else {
    return reverse(str.substring(1)) + str.charAt(0);
  }
}

console.log(revrev('hafs'));

function areRotEq(str1, str2) {
  if (str1.length !== str2.length) return false;
  return (str1 + str1).indexOf(str2) != -1;
}
console.log(areRotEq('hafs', 'shaf'));

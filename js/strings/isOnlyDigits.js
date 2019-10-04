const isOnlyDigitString = str => {
  return /^\d+$/.test(str);
};
console.log(isOnlyDigitString('2323'));
console.log(Number('') ? true : false);

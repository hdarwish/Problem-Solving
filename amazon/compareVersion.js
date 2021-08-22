/*Compare two version numbers version1 and version2.
 If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

 You may assume that the version strings are non-empty and contain only digits and the . character.
 The . character does not represent a decimal point and is used to separate number sequences.
 For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

 Here is an example of version numbers ordering:

 0.1 < 1.1 < 1.2 < 13.37*/

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
let compareVersion = function (a, b) {
  let ver1Arr = a.split('.');
  let ver2Arr = b.split('.');
  let len1 = ver1Arr.length;
  let len2 = ver2Arr.length;
  let i = 0, j = 0;
  while (i < len1 && j < len2) {
    if (parseInt(ver1Arr[i]) > parseInt(ver2Arr[j])) {
      return 1;
    }
    else if (parseInt(ver1Arr[i]) < parseInt(ver2Arr[j])) {
      return -1;
    }
    else {
      i++;
      j++;
    }
  }
  if (len1 === len2) {
    return 0;
  }
  else if (len1 > len2) {
    let nonZero = false;
    while (i < len1) {
      if (parseInt(ver1Arr[i]) > 0) {
        nonZero = true;
        break;
      }
      i++;
    }
    if (nonZero) {
      return 1;
    }
    else {
      return 0;
    }
  }
  else {
    nonZero = false;
    while (j < len2) {
      if (parseInt(ver2Arr[j]) > 0) {
        nonZero = true;
        break;
      }
      j++;
    }
    if (nonZero) {
      return -1;
    }
    else {
      return 0;
    }
  }
};

let a = '1';
let b = '1.0.1';
console.log(compareVersion(a, b));

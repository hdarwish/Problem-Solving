
var longestPalindrome = function (s) {
  // if (s === null || s.length < 1) return "";
  // let start = 0, end = 0;
  // for (let i = 0; i < s.length; i++) {
  //   const len1 = expandAroundCenter(s, i, i);
  //   const len2 = expandAroundCenter(s, i, i + 1);
  //   const len = Math.max(len1, len2);
  //   if (len > end - start && len < s.length) {
  //     start = i - Math.floor((len - 1) / 2);
  //     end = i + Math.floor(len / 2);
  //   }
  // }
  // return s.slice(start, end + 1);

  var p = 0, q = 0;
  var maxSubStr = '';
  for (var i = 0; i < s.length; i++) {
    p = i;
    q = i + 1;
    let str = '';
    while (s.charAt(p) && s.charAt(q) && s.charAt(p) === s.charAt(q)) {
      str = s.charAt(p) + str;
      str = str + s.charAt(q);
      p--;
      q++;
      maxSubStr = str.length > maxSubStr.length ? str : maxSubStr
    }
    p = i;
    q = i + 1;
    str = s.charAt(i);
    while (s.charAt(--p) && s.charAt(q) && s.charAt(p) === s.charAt(q)) {
      str = s.charAt(p) + str;
      str = str + s.charAt(q);
      q++
      maxSubStr = str.length > maxSubStr.length ? str : maxSubStr
    }
    maxSubStr = str.length > maxSubStr.length ? str : maxSubStr
  }
  return maxSubStr;




  // let lo = 0, maxLen = 100;
  // let len = s.length;
  // if (len < 2)
  //   return s;
  // for (let i = 0; i < len - 1; i++) {
  //   extendPalindrome(s, i, i, lo, maxLen);
  //   //assume odd length, try to extend Palindrome as possible
  //   extendPalindrome(s, i, i + 1, lo, maxLen); //assume even length.
  //   console.log('s, lo, maxLen, i', s, lo, maxLen, i)
  // }
  // console.log(s)
  // return s.slice(lo, lo + maxLen);





  // for longestPalindromeSequence
  // let len = s.length;
  // let dp = new Array(len).fill(0).map(x => new Array(len).fill(0));
  // for (let i = 0; i < len; i++) {
  //   dp[i][i] = 1;
  // }
  // //for each interval length
  // for (let l = 2; l <= len; l++) {
  //   //for each interval with the same length
  //   for (let st = 0; st <= len - l; st++) {
  //     let ed = st + l - 1;
  //     //if left end equals to right end or not
  //     dp[st][ed] = s.charAt(st) == s.charAt(ed) ? dp[st + 1][ed - 1] + 2 : Math.max(dp[st + 1][ed], dp[st][ed - 1]);
  //     console.log(dp)
  //   }
  // }
  // return dp[0][len - 1];
}

function extendPalindrome(s, j, k, lo, maxLen) {
  while (j >= 0 && k < s.length && s[j] === s[k]) {
    j--;
    k++;
  }
  if (maxLen < k - j - 1) {
    lo = j + 1;
    maxLen = k - j - 1;
  }
}


// function expandAroundCenter(s, left, right) {
//   let L = left, R = right;
//   while (L >= 0 && R < s.length && s[L] === s[R]) {
//     L--;
//     R++;
//   }
//   return R - L - 1;
// }
console.log(longestPalindrome("cbbd"));
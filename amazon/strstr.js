
// class Solution {
//   public int strStr(String haystack, String needle) {
//     int L = needle.length(), n = haystack.length();
//     if (L == 0) return 0;

//     int pn = 0;
//     while (pn < n - L + 1) {
//       // find the position of the first needle character
//       // in the haystack string
//       while (pn < n - L + 1 && haystack.charAt(pn) != needle.charAt(0))++pn;

//       // compute the max match string
//       int currLen = 0, pL = 0;
//       while (pL < L && pn < n && haystack.charAt(pn) == needle.charAt(pL)) {
//         ++pn;
//         ++pL;
//         ++currLen;
//       }

//       // if the whole needle string is found,
//       // return its start position
//       if (currLen == L) return pn - L;

//       // otherwise, backtrack
//       pn = pn - currLen + 1;
//     }
//     return -1;
//   }
// }

// function to convert character to integer
function charToInt(idx, s) {
  return BigInt(s.charCodeAt(idx) - 'a'.charCodeAt(0));
}

function strStr(haystack, needle) {
  const L = needle.length, n = haystack.length;
  if (L > n) return -1;

  // base value for the rolling hash function
  const a = 26n;
  // modulus value for the rolling hash function to avoid overflow
  const modulus = BigInt(2e31);
  // compute the hash of strings haystack[:L], needle[:L]
  let h = 0n, ref_h = 0n;
  for (let i = 0; i < L; ++i) {
    h = (h * a + charToInt(i, haystack)) % modulus;
    ref_h = (ref_h * a + charToInt(i, needle)) % modulus;
  }
  if (h == ref_h) return 0;
  // const value to be used often : a**L % modulus
  let aL = 1n;
  for (let i = 1; i <= L; ++i) aL = (aL * a) % modulus;

  console.log('h, ref_h, aL', h, ref_h, aL);
  for (let start = 1; start < n - L + 1; ++start) {
    // compute rolling hash in O(1) time
    h = (h * a - charToInt(start - 1, haystack) * aL
      + charToInt(start + L - 1, haystack)) % modulus;
    if (h == ref_h) return start;
  }
  return -1;
}
console.log(strStr('bac', 'a'));

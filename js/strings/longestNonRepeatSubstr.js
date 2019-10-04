//length
const lengthOfLongestSubstring = s => {
  let longest = 0;
  let start = 0;
  const seen = {};

  [...s].forEach((char, i) => {
    if (char in seen && start <= seen[char]) {
      longest = Math.max(i - start, longest);
      start = seen[char] + 1;
    }
    seen[char] = i;
  });

  return Math.max(s.length - start, longest);
};

console.log(lengthOfLongestSubstring('hafsdarwishmohamed'));

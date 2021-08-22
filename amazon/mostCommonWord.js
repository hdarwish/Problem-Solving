function mostCommonWord(paragraph, banned) {
  paragraph += ".";

  const banset = new Set();
  for (let word of banned) banset.add(word);
  const count = new Map();

  let ans = '';
  let ansfreq = 0;

  let word = [];
  for (let c of paragraph) {

    if (c.charCodeAt(0) >= 'A'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0)) {
      word.push(c.toLowerCase());
    } else if (word.length > 0) {
      let finalword = word.join('');
      if (!banset.has(finalword)) {
        const val = count.get(finalword) || 0;
        count.set(finalword, val + 1);
        if (count.get(finalword) > ansfreq) {
          ans = finalword;
          ansfreq = count.get(finalword);
        }
      }
      word = [];
    }
  }

  return ans;
}
console.log(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']));
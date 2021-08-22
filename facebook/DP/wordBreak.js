/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  //DP
  // let wordDictSet=new Set(wordDict);
  // let dp = new Array(s.length + 1).fill(false);
  // dp[0] = true;
  // for (let i = 1; i <= s.length; i++) {
  //     for (let j = 0; j < i; j++) {
  //         if (dp[j] && wordDictSet.has(s.substring(j, i))) {
  //             dp[i] = true;
  //             break;
  //         }
  //     }
  // }
  // return dp[s.length];

  //BFS
  let wordDictSet = new Set(wordDict);
  let queue = [];
  let visited = new Array(s.length).fill(0);
  queue.push(0);
  while (queue.length) {
    let start = queue.shift();
    console.log('start', start);
    if (visited[start] === 0) {
      for (let end = start + 1; end <= s.length; end++) {
        if (wordDictSet.has(s.substring(start, end))) {
          queue.push(end);
          if (end === s.length) {
            return true;
          }
        }
      }
      visited[start] = 1;
    }
  }
  return false;

};
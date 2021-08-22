
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const dict = new Set(wordList);
  const distance = new Map(), nodeNeighbors = new Map();

  const res = [], solution = [];
  dict.add(beginWord);

  let queue = [beginWord], dist = 0, found = false;
  distance.set(beginWord, dist);

  while (queue.length) {
    let count = queue.length;
    found = false;
    for (let i = 0; i < count; i++) {
      let curr = queue.shift();
      let neighbors = getNeighbors(curr, dict);
      for (let neighbor of neighbors) {
        if (!distance.has(neighbor)) {
          distance.set(neighbor, dist + 1);
          if (neighbor === endWord) {
            found = true;
          } else {
            queue.push(neighbor);
          }
        }
      }
      nodeNeighbors.set(curr, neighbors);
    }
    if (found) break;
    dist++;
  }

  dfs(beginWord, endWord, nodeNeighbors, distance, solution, res);

  return res;
};

function getNeighbors(word, dict) {
  const res = [];
  const alphs = 'abcdefghijklmnopqrstuvwxyz';

  let chs = word.split('');
  for (let i = 0; i < word.length; i++) {
    let _t = chs[i];
    for (let j = 0; j < alphs.length; j++) {
      if (_t !== alphs[j]) {
        chs[i] = alphs[j];
        let next = chs.join('');
        if (dict.has(next)) {
          res.push(next);
        }
      }
    }
    chs[i] = _t;
  }
  return res;
}

function dfs(curr, end, nodeNeighbors, distance, solution, res) {
  solution.push(curr);
  if (curr === end) {
    res.push([...solution]);
  } else {
    let neighbors = nodeNeighbors.get(curr);
    if (neighbors) {
      for (let next of neighbors) {
        if (distance.get(next) === distance.get(curr) + 1) {
          dfs(next, end, nodeNeighbors, distance, solution, res);
        }
      }
    }
  }
  solution.pop();
}
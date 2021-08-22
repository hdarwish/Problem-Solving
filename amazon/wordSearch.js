/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell,
where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
*/


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */


let exist = function (board, word) {
  if (!word.length) {
    return true;
  }
  if (board === null && !board.length) {
    return false;
  }
  let doesExist;
  //backtracking
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      doesExist = find(board, i, j, word, 0);
      if (doesExist) {
        return true;
      }
    }
  }
  return false;
};

let find = function (board, i, j, word, start) {
  if (start === word.length) {
    return true;
  }
  if (i < 0 || i >= board.length
    || j < 0 || j >= board[0].length || board[i][j] !== word.charAt(start)) {
    return false;
  }
  board[i][j] = "#";
  let doesExist = find(board, i - 1, j, word, start + 1) || find(board, i + 1, j, word, start + 1)
    || find(board, i, j - 1, word, start + 1) || find(board, i, j + 1, word, start + 1);
  board[i][j] = word.charAt(start);
  return doesExist;
};

let board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

let word = "ABCCED";
console.log(exist(board, word));

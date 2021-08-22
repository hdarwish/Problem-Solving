class TrieNode {
  constructor() {
    this.children = new Map();
    this.word = null
  }
}

let _board = null;
let _result = [];

var findWords = (board, words) => {
  // Step 1). Construct the Trie
  let root = new TrieNode();
  for (let word of words) {
    let node = root;

    for (let letter of word.split('')) {
      if (node.children.has(letter)) {
        node = node.children.get(letter);
      } else {
        let newNode = new TrieNode();
        node.children.set(letter, newNode);
        node = newNode;
      }
    }
    node.word = word;  // store words in Trie
  }

  this._board = board;
  // Step 2). Backtracking starting for each cell in the board
  for (let row = 0; row < board.length; ++row) {
    for (let col = 0; col < board[row].length; ++col) {
      if (root.children.has(board[row][col])) {
        backtracking(row, col, root);
      }
    }
  }

  return this._result;

};
function backtracking(row, col, parent) {
  let letter = this._board[row][col];
  let currNode = parent.children.get(letter);

  // check if there is any match
  if (currNode.word != null) {
    this._result.add(currNode.word);
    currNode.word = null;
  }

  // mark the current letter before the EXPLORATION
  this._board[row][col] = '#';

  // explore neighbor cells in around-clock directions: up, right, down, left
  let rowOffset = [- 1, 0, 1, 0];
  let colOffset = [0, 1, 0, - 1];
  for (let i = 0; i < 4; ++i) {
    let newRow = row + rowOffset[i];
    let newCol = col + colOffset[i];
    if (newRow < 0 || newRow >= this._board.length || newCol < 0
      || newCol >= this._board[0].length) {
      continue;
    }
    if (currNode.children.has(this._board[newRow][newCol])) {
      backtracking(newRow, newCol, currNode);
    }
  }

  // End of EXPLORATION, restore the original letter in the board.
  this._board[row][col] = letter;

  // Optimization: incrementally remove the leaf nodes
  if (!currNode.children.size) {
    parent.children.delete(letter);
  }
}
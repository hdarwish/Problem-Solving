/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 * Algorithm

The overall workflow of the algorithm is intuitive, which consists of a loop over each cell in the board 
and a recursive function call starting from the cell. Here is the skeleton of the algorithm.

We build a Trie out of the words in the dictionary, which would be used for the matching process later.

Starting from each cell, we start the backtracking exploration (i.e. backtracking(cell)), 
if there exists any word in the dictionary that starts with the letter in the cell.

During the recursive function call backtracking(cell), we explore the neighbor cells (i.e. neighborCell) 
around the current cell for the next recursive call backtracking(neighborCell).
 At each call, we check if the sequence of letters that we traverse so far matches any word in the dictionary,
  with the help of the Trie data structure that we built at the beginning.

  Complexity

Time complexity: \mathcal{O}(M(4\cdot3^{L-1}))O(M(4⋅3 
L−1
 )), where MM is the number of cells in the board and LL is the maximum length of words.

It is tricky is calculate the exact number of steps that a backtracking algorithm would perform.
 We provide a upper bound of steps for the worst scenario for this problem. 
 The algorithm loops over all the cells in the board, therefore we have MM as a factor in the complexity formula. 
 It then boils down to the maximum number of steps we would need for each starting cell (i.e.4\cdot3^{L-1}4⋅3 
L−1
 ).

Assume the maximum length of word is LL, starting from a cell, initially we would have at most 4 directions to explore.
 Assume each direction is valid (i.e. worst case), during the following exploration, 
 we have at most 3 neighbor cells (excluding the cell where we come from) to explore. As a result, 
 we would traverse at most 4\cdot3^{L-1}4⋅3 
L−1
  cells during the backtracking exploration.

One might wonder what the worst case scenario looks like. Well, here is an example.
 Imagine, each of the cells in the board contains the letter a, and the word dictionary contains a single word ['aaaa'].
  Voila. This is one of the worst scenarios that the algorithm would encounter.

  Space Complexity: \mathcal{O}(N)O(N), where NN is the total number of letters in the dictionary.

The main space consumed by the algorithm is the Trie data structure we build.
 In the worst case where there is no overlapping of prefixes among the words, 
 the Trie would have as many nodes as the letters of all words.
  And optionally, one might keep a copy of words in the Trie as well. As a result, we might need 2N2N space for the Trie.
 */
class TrieNode {
  constructor() {
    this.children = new Map();
    this.word = null
  }
}

function backtracking(row, col, parent, board, result) {
  let letter = board[row][col];
  let currNode = parent.children.get(letter);

  // check if there is any match
  if (currNode.word != null) {
    result.push(currNode.word);
    currNode.word = null;
  }

  // mark the current letter before the EXPLORATION
  board[row][col] = '#';

  // explore neighbor cells in around-clock directions: up, right, down, left
  let rowOffset = [- 1, 0, 1, 0];
  let colOffset = [0, 1, 0, - 1];
  for (let i = 0; i < 4; ++i) {
    let newRow = row + rowOffset[i];
    let newCol = col + colOffset[i];
    if (newRow < 0 || newRow >= board.length || newCol < 0
      || newCol >= board[0].length) {
      continue;
    }
    if (currNode.children.has(board[newRow][newCol])) {
      backtracking(newRow, newCol, currNode, board, result);
    }
  }

  // End of EXPLORATION, restore the original letter in the board.
  board[row][col] = letter;

  // Optimization: incrementally remove the leaf nodes
  if (!currNode.children.size) {
    parent.children.delete(letter);
  }
}
var findWords = (board, words) => {
  let result = [];
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

  // Step 2). Backtracking starting for each cell in the board
  for (let row = 0; row < board.length; ++row) {
    for (let col = 0; col < board[row].length; ++col) {
      if (root.children.has(board[row][col])) {
        backtracking(row, col, root, board, result);
      }
    }
  }

  return result;

};
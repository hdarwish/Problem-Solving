
function Node() {
  this.nodes = [];
  this.endFlag = false;
}

/**
 * @constructor
 */
let WordDictionary = function () {
  this.startNode = new Node();
  this.startNode.endFlag = true;
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.startNode;

  for (let i = 0, len = word.length; i < len; i++) {
    let item = word.charCodeAt(i) - 97;
    if (!node.nodes[item]) {
      node.nodes[item] = new Node();
    }
    node = node.nodes[item];
  }

  node.endFlag = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function (word) {
  let node = this.startNode;
  let isFound = false;

  dfs(node, 0);

  function dfs(node, index) {
    if (isFound)
      return;

    if (index === word.length) {
      isFound = node.endFlag;
      return;
    }

    if (word[index] === '.') {
      for (let i = 0; i < 26; i++) {
        if (node.nodes[i])
          dfs(node.nodes[i], index + 1);
      }
    } else {
      let item = word.charCodeAt(index) - 97;
      if (node.nodes[item])
        dfs(node.nodes[item], index + 1);
    }
  }

  return isFound;
};
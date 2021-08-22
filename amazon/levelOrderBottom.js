var levelOrderBottom = function (root) {
  const res = [], queue = [];
  if (!root) return res;

  queue.push(root);
  let qLen = queue.length;
  while (qLen !== 0) {
    res.unshift([]);
    for (let i = 0; i < qLen; i++) {
      let node = queue.shift();
      res[0].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    qLen = queue.length;
  }

  return res;
};

const { createBinaryTree } = require('./util');
let tree = createBinaryTree([3, 9, null, null, 20, 15, null, null, 7]);
console.info(levelOrderBottom(tree));
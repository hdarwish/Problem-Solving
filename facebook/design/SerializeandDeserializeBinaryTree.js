let serialize = function (root) {
  let result = [];
  traverse(root, result);
  return result.join(',');
};

function traverse(root, result) {
  if (!root) {
    result.push('null');
    return;
  }
  result.push(root.val);
  traverse(root.left, result);
  traverse(root.right, result);
}


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
let deserialize = function (data) {
  if (data === "") {
    return null;
  }
  let dataArr = data.trim().split(',');
  return deserializeReverse(dataArr);
};

function deserializeReverse(dataArr) {
  if (dataArr[0] === 'null') {
    dataArr.shift();
    return null;
  }
  // similar to what we did when we serialize the binary tree. We first deal with the root node, then
  // we we deal with the left node first, then the right node. The same depth first method.
  let root = new TreeNode(parseInt(dataArr[0]));
  // remove the node which has been added.
  dataArr.shift();
  root.left = deserializeReverse(dataArr);
  root.right = deserializeReverse(dataArr);
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let root = new TreeNode(1);
let node1 = new TreeNode(2);
let node2 = new TreeNode(3);
let node3 = new TreeNode(4);
let node4 = new TreeNode(5);
root.left = node1;
root.right = node2;
node2.left = node3;
node2.right = node4;
console.log(serialize(root));
console.log(deserialize(serialize(root)));
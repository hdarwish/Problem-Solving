
var connect = function (root) {
  if (!root) {
    return;
  }
  let queue = [root];
  let i = 0, len;
  while (queue.length) {
    len = queue.length;
    while (i < len) {
      if (i !== len - 1) {
        queue[0].next = queue[1];
      }
      if (queue[0].left) {
        queue.push(queue[0].left);
      }
      if (queue[0].right) {
        queue.push(queue[0].right);
      }
      queue.shift();
      i++;
    }
    i = 0;
  }
  return root;

  // sanity check
  // if (node === null) return;
  // if (node.left !== null) {
  //   node.left.next = node.right;
  // }
  // if (node.next !== null && node.right !== null) {
  //   node.right.next = node.next.left;
  // }
  // connect(node.left);
  // connect(node.right);
  // return node;
};
console.log(connect([1, 2, 3, 4, 5, 6, 7]))
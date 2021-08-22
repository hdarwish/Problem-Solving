
function helper(node, level, levels) {
  // start the current level
  //   if (levels.length === level)
  //     levels.push([]);

  //   // fulfil the current level
  //   levels[level].push(node.val);;

  //   // process child nodes for the next level
  //   if (node.left !== null)
  //     helper(node.left, level + 1, levels);
  //   if (node.right !== null)
  //     helper(node.right, level + 1, levels);
}

function levelOrder(root) {
  //   let levels = [];
  //   if (root === null) return levels;
  //   helper(root, 0, levels);
  //   return levels;

  //iterative
  let levels = [];
  if (root == null) return levels;

  let queue = [];
  queue.push(root);
  let level = 0;
  while (queue.length) {
    // start the current level
    levels.push([]);

    // number of elements in the current level
    let level_length = queue.length;
    for (let i = 0; i < level_length; ++i) {
      let node = queue.shift();

      // fulfill the current level
      levels[level].push(node.val);

      // add child nodes of the current level
      // in the queue for the next level
      if (node.left != null) queue.push(node.left);
      if (node.right != null) queue.push(node.right);
    }
    // go to next level
    level++;
  }
  return levels;
}
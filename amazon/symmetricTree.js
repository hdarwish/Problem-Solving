function isSymmetricRecursive(root) {
  return isMirror(root, root);
}

function isMirror(t1, t2) {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;
  return (t1.val === t2.val)
    && isMirror(t1.right, t2.left)
    && isMirror(t1.left, t2.right);
}

function isSymmetric(root) {
  let q = [];
  q.push(root);
  q.push(root);
  while (q.length) {
    let t1 = q.shift();
    let t2 = q.shift();
    if (t1 === null && t2 === null) continue;
    if (t1 === null || t2 === null) return false;
    if (t1.val !== t2.val) return false;
    q.push(t1.left);
    q.push(t2.right);
    q.push(t1.right);
    q.push(t2.left);
  }
  return true;
}
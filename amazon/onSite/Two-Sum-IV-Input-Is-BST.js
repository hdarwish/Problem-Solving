/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    //Approach #1 Using HashSet
    let set = new Set();
    return find(root, k, set);
    
    function find( root,  k,  set) {
        if (root === null)
            return false;
        if (set.has(k - root.val))
            return true;
        set.add(root.val);
        return find(root.left, k, set) || find(root.right, k, set);
    } 
};

var findTarget2 = function(root, k) {
  //Approach #2 Using BFS and HashSet 
  let set = new Set();
        let queue = [];
        queue.push(root);
        while (queue.length) {
            if (queue[0] !== null) {
                let node = queue.shift();
                if (set.has(k - node.val))
                    return true;
                set.add(node.val);
                queue.push(node.right);
                queue.push(node.left);
            } else
                queue.shift();
        }
        return false;
}

var findTarget3 = function(root, k) {
//Approach #3 Using BST
 let list = [];
      inorder(root, list);
        let l = 0, r = list.length - 1;
        while (l < r) {
            let sum = list[l] + list[r];
            if (sum === k)
                return true;
            if (sum < k)
                l++;
            else
                r--;
        }
        return false;
    
   function inorder( root,  list) {
        if (root == null)
            return;
        inorder(root.left, list);
        list.push(root.val);
        inorder(root.right, list);
    }
}
// console.log(findTarget3([5,3,6,2,4,null,7],9))
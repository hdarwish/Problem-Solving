/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function getDepth(node){
    if(!node){
        return 0;
    }
    
    const leftDepth = getDepth(node.left);
    const rightDepth = getDepth(node.right);
    
    return Math.max(leftDepth,rightDepth) + 1;
}
var subtreeWithAllDeepest = function(root) {
    if(!root){
        return root;
    }

    let leftDepth = getDepth(root.left);
    let rightDepth = getDepth(root.right);
    
    if(leftDepth === rightDepth){
        return root;
    }
    
    if(leftDepth>rightDepth){
        return subtreeWithAllDeepest(root.left);
    }
    
    return subtreeWithAllDeepest(root.right);


    //The time complexity of above code is O(N^2) since a binary tree can degenerate to a linked list, 
    //the worst complexity to calculate depth is O(N) and so the overall time complexity is O(N^2). 
    //Here is the memoized version:

    //Time complexity: O(N)

    function depth12( root, map){
        if(root == null ) return 0;
        if( map.has(root) ) return map.get(root);
        let max = Math.max(depth2(root.left,map),depth2(root.right,map))+1;
        map.set(root,max);
        return max;
    }
    function dfs( root,  map){
        let left =  depth2(root.left,map);
        let right = depth2(root.right,map);
        if( left  === right ) return root;
        if( left > right ) return dfs(root.left,map);
        return dfs(root.right,map);
    }
    function subtreeWithAllDeepest2(TreeNode root) {
        if( root == null ) return null;
        let map = new Map();
        depth2(root,map);
        return dfs(root,map);
    }
};
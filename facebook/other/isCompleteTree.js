/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    if(root === null){
        return true;
    }
    // Variants of sequence traversal
    let curLevel = [root];
    let nextLevel = [];
    let meetNullChild = false;

    while(true){
        for(let i=0;i<curLevel.length;i++){
            // Encountered empty child nodes, all future nodes should be empty child nodes
            if(meetNullChild){
                if(curLevel[i].left || curLevel[i].right){
                    return false;
                }
            }else{
                // Most normal, there are two children
                if(curLevel[i].left && curLevel[i].right){
                    nextLevel.push(curLevel[i].left,curLevel[i].right);
                    continue;
                }
                // Encountered an empty child node
                meetNullChild = true;
                // On the left, visual inspection and the next layer
                if(curLevel[i].left){
                    nextLevel.push(curLevel[i].left);
                }else if(curLevel[i].right){
                    // No left but right is definitely wrong
                    return false;
                }
                
            }
        }
        // There is no next layer
        if(nextLevel.length === 0){
            return true;
        }
        curLevel = nextLevel;
        nextLevel = [];
    }
    
};
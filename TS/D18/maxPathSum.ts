class TreeNode {
    val: number;
    leftChild: TreeNode | null;
    rightChild: TreeNode | null

    constructor(val:number){
        this.val = val;
        this.leftChild = null;
        this.rightChild = null;
    }
}

/**
 * 
 * Pattern -> Post order traversal with global variable 
 */

const maxPathSum = (root: TreeNode): number => {
    let maxPathSum = -Infinity;

    const traverse = (root: TreeNode | null):number => {
        if(!root) return 0;
        
        // traverse to child nodes
        const leftSum = Math.max(0, traverse(root.leftChild));
        const rightSum = Math.max(0, traverse(root.rightChild));

        
        maxPathSum = Math.max(maxPathSum, leftSum + rightSum + root.val); // update global max Path
        return Math.max(leftSum, rightSum) + root.val;
    }

    traverse(root); // init traversal with 0;
    return maxPathSum;
}

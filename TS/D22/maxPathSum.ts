class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor (val: number) {
        this.val = val;
        this.left =  null;
        this.right =  null;
    }
}

/*
    Find the maximum sum of any path between any two nodes in a binary tree. 
    A path does not need to pass through the root, 
    and it can go from a parent to a child or between any two nodes.

    "What's the maximum sum I can get by connecting nodes in this tree?"

    Loop Invariant
    At each node, maintain two critical pieces of information:
    The maximum path sum that can be extended to the parent (single path)
    The maximum overall path sum in the entire tree so far
*/

const maxPathSum = (root: TreeNode | null):number => {
    let maxSum = -Infinity;
    
    // what does each node have to do? 
    const dfs = (node: TreeNode | null): number =>  {
        if(!node) return 0;
        
        // get best paths from its children/subtrees
        const leftPathSum = Math.max(dfs(node.left), 0);
        const rightPathSum = Math.max(dfs(node.right), 0);
        
        // update global state at each node
        maxSum = Math.max(maxSum, node.val + leftPathSum + rightPathSum);

        // return single best path at each node
        return node.val + Math.max(leftPathSum, rightPathSum);
    }

    dfs(root);
    return maxSum;
}

/**
 * 
 */
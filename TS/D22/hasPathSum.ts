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

// Check if there is a path where the sum of its node values is equal to our given target value
// well, what if we wanted to capture that path? 

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
    const dfs = (node: TreeNode | null, remainingSum: number): boolean => {
        if(!node) return false;

        remainingSum -= node.val;

        // if its a leaf node, check if we've reached our target path sum
        if(!node.left && !node.right) {
            return remainingSum === 0;
        }

        // keep exploring paths
        return dfs(node.left, remainingSum) || dfs(node.right, remainingSum);
    }   
    return dfs(root, targetSum);
}
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

const childrenSumProperty = (root: TreeNode | null): TreeNode | null => {
    // Bottom-up approach using post-order dfs
    const dfs = (node: TreeNode | null): void => {
        if (!node) return;
        
        dfs(node.left);
        dfs(node.right);
        
        // Calculate current children sum
        let childrenSum = 0;
        if (node.left) childrenSum += node.left.val;
        if (node.right) childrenSum += node.right.val;
        
        // If children sum is less than current node
        if (childrenSum < node.val) {
            // Distribute extra value to children
            if (node.left) node.left.val += (node.val - childrenSum);
            else if (node.right) node.right.val += (node.val - childrenSum);
        }
    }
    if (root) dfs(root);
    return root;
}
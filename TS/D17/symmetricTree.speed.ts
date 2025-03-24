// Definition for a binary tree node
https://leetcode.com/problems/symmetric-tree/

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

// Solution 1: Recursive Approach (Problem Decomposition)
function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;
    return isMirror(root.left, root.right);
}

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    // If both nodes are null, they're symmetric
    if (!left && !right) return true;
    
    // If only one node is null, they're not symmetric
    if (!left || !right) return false;

    return (
        left.val === right.val &&
        isMirror(left.left, right.right) &&
        isMirror(left.right, right.left)
    );
}

// Solution 2: Iterative Approach (Traversal Mindset)
function isSymmetricIterative(root: TreeNode | null): boolean {
    if (!root) return true;
    
    // Using a queue to perform level-by-level traversal
    const queue: Array<TreeNode | null> = [];
    
    // Add the left and right subtrees to start
    queue.push(root.left);
    queue.push(root.right);
    
    while (queue.length > 0) {
        // Always dequeue nodes in pairs
        const left = queue.shift();
        const right = queue.shift();
        
        // If both are null, continue (symmetric for this pair)
        if (!left && !right) continue;
        
        // If only one is null or their values differ, not symmetric
        if (!left || !right || left.val !== right.val) return false;
        
        // Add the outer pair (left.left and right.right)
        queue.push(left.left);
        queue.push(right.right);
        
        // Add the inner pair (left.right and right.left)
        queue.push(left.right);
        queue.push(right.left);
    }
    
    return true;
}
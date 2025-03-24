// Definition for a binary tree node
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

// Solution 1: Level Order Traversal (BFS)
function isSameTreeBFS(p: TreeNode | null, q: TreeNode | null): boolean {
    // Initialize queues for level-order traversal
    const queueP: Array<TreeNode | null> = [p];
    const queueQ: Array<TreeNode | null> = [q];
    
    while (queueP.length > 0 && queueQ.length > 0) {
        const nodeP = queueP.shift();
        const nodeQ = queueQ.shift();
        
        // Check if current nodes are both null
        if (!nodeP && !nodeQ) continue;
        
        // Check if one is null or values differ
        if (!nodeP || !nodeQ || nodeP.val !== nodeQ.val) return false;
        
        // Add children to the queues (including nulls to preserve structure)
        queueP.push(nodeP.left);
        queueP.push(nodeP.right);
        queueQ.push(nodeQ.left);
        queueQ.push(nodeQ.right);
    }
    
    // If we've gone through both trees without finding differences
    return queueP.length === queueQ.length; // Should both be 0
}

// Solution 2: DFS with Lists (Preorder)
function isSameTreeDFSLists(p: TreeNode | null, q: TreeNode | null): boolean {
    const listP: Array<number | null> = [];
    const listQ: Array<number | null> = [];
    
    // Build lists using preorder traversal (root, left, right)
    function dfs(node: TreeNode | null, list: Array<number | null>): void {
        if (!node) {
            list.push(null); // Push null to preserve structure
            return;
        }
        
        list.push(node.val);
        dfs(node.left, list);
        dfs(node.right, list);
    }
    
    // Populate both lists
    dfs(p, listP);
    dfs(q, listQ);
    
    // Check if lists are equal
    if (listP.length !== listQ.length) return false;
    
    for (let i = 0; i < listP.length; i++) {
        if (listP[i] !== listQ[i]) return false;
    }
    
    return true;
}

// Solution 3: Simultaneous Recursive DFS
function isSameTreeRecursive(p: TreeNode | null, q: TreeNode | null): boolean {
    // If both nodes are null, they're the same
    if (!p && !q) return true;
    
    // If only one is null or their values differ, they're not the same
    if (!p || !q || p.val !== q.val) return false;
    
    // Recursively check left and right subtrees
    return isSameTreeRecursive(p.left, q.left) && 
           isSameTreeRecursive(p.right, q.right);
}
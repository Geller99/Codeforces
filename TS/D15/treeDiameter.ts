class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    
    constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }



/**
 * Diameter of a tree
 * 
 * Each node needs to 
 * Calculate the height of its left subtree
 * Calculate height of right subtree
 * Update global maxDiameter with (left + right) heights from the subtree 
 * Return its height to its parent max(left, right) + 1
 * Post-order traversal pattern
 * 
 * 
 Key insight is, the longest path must pass through some node, so if we check at every node, we ensure we find it
 */



const getTreeHeight = (root: TreeNode | null): number => {
    // Base case: empty tree has height 0
    if (!root) return 0;
    
    // Calculate height of left and right subtrees
    const leftHeight = getTreeHeight(root.left);
    const rightHeight = getTreeHeight(root.right);
    
    // Height is the maximum path length + 1 for the current node
    return Math.max(leftHeight, rightHeight) + 1;
}


const getTreeDiameter = (root: TreeNode | null): number => {
    if (!root) return 0;
    
    // Calculate the diameter passing through the root
    const pathThroughRoot = getTreeHeight(root.left) + getTreeHeight(root.right);
    
    // Calculate diameter in left subtree (might be larger than path through root)
    const leftDiameter = getTreeDiameter(root.left);
    
    // Calculate diameter in right subtree (might be larger than path through root)
    const rightDiameter = getTreeDiameter(root.right);
    
    // Return the maximum of the three possibilities
    return Math.max(pathThroughRoot, Math.max(leftDiameter, rightDiameter));
}
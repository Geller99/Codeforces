
/**
 * Divide and Conquer template pattern...trees
 */


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

const isBalancedTree = (root: TreeNode | null) => {
    return getHeight(root) !== -1;
}

const getHeight = (node: TreeNode | null)  => {
    if(!node) return 0;

    const leftHeight = getHeight(node.left);
    if(leftHeight === -1) return -1;

    const rightHeight = getHeight(node.right);
    if(rightHeight === -1) return -1;

    if(Math.abs(leftHeight! - rightHeight!) > 1)  return -1;

    return Math.max(leftHeight, rightHeight) + 1;
}
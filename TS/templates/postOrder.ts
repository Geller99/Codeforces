class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    
    constructor(val: number) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
const postOrderTraversal = (root: TreeNode | null): number[] => {
    const result: number[] = [];
    
    function traverse(node: TreeNode | null): void {
      if (!node) return;
      
      // 1. First, traverse left subtree
      traverse(node.left);
      
      // 2. Then, traverse right subtree
      traverse(node.right);
      
      // 3. Finally, process current node (after both children)
      result.push(node.val);
      console.log(`Processing node: ${node.val}`);
    }
    
    traverse(root);
    return result;
  }
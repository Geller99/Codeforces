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
 * 
 * edge/complex/test cases
 *  
 */


const isValidBST = (node: TreeNode | null, min:number | null = null, max: number | null = null): boolean => {
      if(!node) return true;

      if((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
        return false;
      }

      return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val, max);
    }


const validateBSTDivideConquer = (root: TreeNode | null): boolean => {
      // Helper function that returns info about subtree: {isBST, min, max}
      function dfs(node: TreeNode | null): {isBST: boolean, min: number, max: number} {
          // Base case: empty tree is a valid BST
          if (!node) {
              // Return values that won't affect parent calculations
              // Using Infinity ensures proper comparisons when combining results
              return {isBST: true, min: Infinity, max: -Infinity};
          }
          
          // Divide: Get results from left and right subtrees
          const left = dfs(node.left);
          const right = dfs(node.right);
          
          // Conquer: Combine results
          // BST conditions:
          // 1. Left subtree is a valid BST
          // 2. Right subtree is a valid BST
          // 3. Max value in left subtree < current node value
          // 4. Min value in right subtree > current node value
          const isBST = left.isBST && 
                        right.isBST && 
                        (left.max < node.val) && 
                        (right.min > node.val);
          
          // Calculate min and max values in this subtree
          const min = Math.min(node.val, left.min);
          const max = Math.max(node.val, right.max);
          
          return {isBST, min, max};
      }
      
      return dfs(root).isBST;
  };
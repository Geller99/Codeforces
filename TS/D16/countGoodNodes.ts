
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


  const getGoodNodesApproachA = (root: TreeNode | null, maxSoFar: number = -Infinity): number => {
    if (!root) return 0;
    
    const isGoodNode = root.val >= maxSoFar ? 1 : 0;
    const newMaxSoFar = Math.max(maxSoFar, root.val);


    const leftCount = getGoodNodesApproachA(root.left, newMaxSoFar);
    const rightCount = getGoodNodesApproachA(root.right, newMaxSoFar);
    
    return isGoodNode + leftCount + rightCount;
}


const getGoodNodesApproachB = (root: TreeNode | null): number => {  // dry run - using [2,1,3,1,1,5]
    let goodCount = 0;

    const preOrderTraversal = (node: TreeNode | null, maxSoFar: number): void => {
      if (!node) return; // skip // skip // skip
      
      // Process current node
      if (node.val >= maxSoFar) {
        goodCount++; // 1 // 1 // 2
      }
      
      // Update maximum value for child paths
      const newMaxSoFar = Math.max(maxSoFar, node.val); // 2 // 2 // 3

      preOrderTraversal(node.left, newMaxSoFar); // (TreeNode(1), 2) // (TreeNode(3), 2)     
      preOrderTraversal(node.right, newMaxSoFar); // (TreeNode(1), 2) 
    }
    
    preOrderTraversal(root, -Infinity);
    return goodCount;
  }
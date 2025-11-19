


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



const isSameTree = (root1: TreeNode, root2: TreeNode):boolean => {
        
    if(root1 === null && root2 === null) return true;
    if(root1 ===  null || root2 === null) return false;

    if(root1.val !== root2.val) return false;

    return isSameTree(root1.left!, root2.left!) && isSameTree(root1.right!, root2.right!);
  }

 



  const isSubtreeRecursive = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    // Base cases
    if (subRoot === null) return true;  // Empty tree is always a subtree
    if (root === null) return false;    // Can't find subtree in an empty tree
    
    // Check if the trees match at this node
    if (isSameTree(root, subRoot)) return true;
    
    // If not, recursively check left and right subtrees
    return isSubtreeRecursive(root.left, subRoot) || isSubtreeRecursive(root.right, subRoot);
};


const isSubtreeDnC = (root: TreeNode | null, subRoot: TreeNode | null) => {

    // base cases
    if(subRoot ===  null) return true;
    if(root === null) return false;

    // Divide into three independent sub-problems

    // check if trees are identical
    if(isSameTree(root, subRoot)) return true;

    const leftResult = isSameTree(root.left!, subRoot);
    if(leftResult) return true;

    const rightResult = isSameTree(root.right!, subRoot);
    if(rightResult) return true;

    return rightResult;
}
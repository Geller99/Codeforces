
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


  const isSameTree = (root1: TreeNode, root2: TreeNode) => {
        
    if(root1 === null && root2 === null) return true;
    if(root1 ===  null || root2 === null) return false;

    if(root1.val !== root2.val) return false;

    return isSameTree(root1.left!, root2.left!) && isSameTree(root1.right!, root2.right!);
  }

 
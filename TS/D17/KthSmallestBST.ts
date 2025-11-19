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



const KthSmallest = (root: TreeNode, k:number) => {
    let count = 0;
    let result = -1;

    const traverse = (root: TreeNode | null) => {
       if(!root || count >= k) return;

       traverse(root.left);

       // visit current node
       count++;
       if(count === k){
        result = root.val;
        return
       }
       traverse(root.right);
    } 

    traverse(root);
    return result;
}
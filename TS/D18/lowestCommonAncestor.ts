class TreeNode {
    val: number;
    leftChild: TreeNode | null;
    rightChild: TreeNode | null

    constructor(val:number){
        this.val = val;
        this.leftChild = null;
        this.rightChild = null;
    }
}

const LCABST = (root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null => {
    if(!root) return null;
    if(!p && !q) return null;
    if(!p) return q;
    if(!q) return p;
    
    // If both p and q are greater than root, LCA must be in right subtree
    if(p.val > root.val && q.val > root.val) {
        return LCABST(root.rightChild, p, q);
    }
    
    // If both p and q are less than root, LCA must be in left subtree
    if(p.val < root.val && q.val < root.val) {
        return LCABST(root.leftChild, p, q);
    }
    
    // If p and q are on different sides of root, or one of them is equal to root
    return root;
}
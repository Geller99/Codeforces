

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


const isBalanced = (root: TreeNode | null): boolean => {

    const checkHeight = (node: TreeNode | null): number => {
        // base case: empty tree of height 0
        if(!node) return 0;

        const leftHeight = checkHeight(node.leftChild);
        if(leftHeight === -1) return -1; // if left subtree is unbalanced, propagate result 

        const rightHeight = checkHeight(node.rightChild);
        if(rightHeight === -1) return -1; // if right subtree is unbalanced, propagate result


        if(Math.abs(leftHeight - rightHeight) > 1) {
            return -1; // unbalanced
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }

    return checkHeight(root) !== -1;
}
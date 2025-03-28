/**
 * Uses a stack to imitate the recursive behavior of recursive DFS
 */

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
  

const preOrderIterative = (root: TreeNode | null):number[] => {
    if(!root) return [];

    const result: number[] = [];
    const stack: TreeNode[] = [root];

    while(stack.length > 0) {
        const current =  stack.pop()!;

        // pre-order position of node
        result.push(current.val);

        // push  right child first - LIFO (stack)
        if(current.right) {
            stack.push(current.right);
        }

        if(current.left){
            stack.push(current.left);
        }
    }
    return result;
}
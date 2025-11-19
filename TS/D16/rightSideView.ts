

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


const rightSideView = (root: TreeNode | null) => {
    if(!root) return [];

    const result: number[] = [];
    const queue: TreeNode[] = [root];

    while(queue.length > 0) {
        const levelSize = queue.length;

        // process nodes at current level
        for(let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;

            if(i === levelSize - 1) {       // if current node is the last value in this level, 
                result.push(node.val);       // add to result
            }

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
}
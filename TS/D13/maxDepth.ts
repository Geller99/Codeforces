
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


const bfsMaxDepth = (root: TreeNode): number => {
    if(!root) return 0;

    let queue: TreeNode[] = [root];
    let depth = 1; // at current queue, we're only "root" deep which is one level
    
    while(queue.length > 0) {
        let levelSize = queue.length;  // capture level size for iteration

        for(let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift()!;
            
        console.log("depth = " + depth + ", val = " + currentNode.val);

            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        depth++;    // increment depth at the conclusion of each "level"
    }
    return depth;
  }


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


const BFSNested = (root:TreeNode) => {
    if(!root) return [];

    let queue: TreeNode[] = [root];
    let result: number[][] = [];

    while(queue.length > 0) {
        let levelSize = queue.length;
        let levelResult: number[] = [];

        // process each level
        for(let i = 0; i < levelSize; i++) {
            let node = queue.shift()!;
            levelResult.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        result.push(levelResult);

    }

    return result;

}
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


const BFSTree = (root:any) => {
    if(!root) return;

    let queue: TreeNode[] = [root];
    let levelCount = 0;


    while(queue.length > 0) {
        let levelSize = queue.length;

        levelCount++;  // at each iteration, we increment our level count
        for(let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift()!;  // pop the front of queue and process
            
            if(currentNode.left) queue.push(currentNode.left);  // push children of current node to back of queue
            if(currentNode.right) queue.push(currentNode.right);
        }
    }
    return levelCount;
}
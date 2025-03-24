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


// base variation, level order traversals (BFS)
// simply remove the front element of the queue and add its left and right children to the queue
const levelOrderTraversal = (root: TreeNode):void => {
    if(!root) return;
    let queue: TreeNode[] = [root]; // starts with root at front of queue 

    while(queue.length > 0) {
      let node = queue.shift()!;  // process/visit the first value in the queue

      console.log(node.val); // process node
      if(node.left) queue.push(node.left); // add left child to back of queue
      if(node.right) queue.push(node.right); // add right child to back of queue
    }
}


const levelOrderMaxDepth = (root: TreeNode):void => {
    if(!root) return;
    let queue: TreeNode[] = [root];
    let depth = 1; // current depth with root being the singular node in the queue

    while(queue.length > 0) {
      let levelSize = queue.length;

      for(let i = 0; i < levelSize; i++) {
        let node = queue.shift()!;
        
        console.log("depth = " + depth + ", val = " + node.val);

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);  
      }
      depth++;      // increment depth as we step to a new "level"
    }
} 









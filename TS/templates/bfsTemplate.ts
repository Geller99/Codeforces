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

      console.log(node.val); // process node - CUSTOMIZATION POINT

      if(node.left) queue.push(node.left); // add left child to back of queue
      if(node.right) queue.push(node.right); // add right child to back of queue
    }

}


/**
 * 
 * Max Depth Variation
 * We hold and increment a depth variable as we capture each "level"
 */
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
      depth++;      // increment depth as we step to a new "level" - LEVEL PROCESSING
    }
} 


/**
 * 
 * Alternate between processing levels left-to-right and right-to-left
 * Track a boolean flag indicating what direction for each level
 * use unshift to added elements to the front of array when processing right-to-left
 */

const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];
  
  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  let leftToRight = true;
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      
      // Add based on direction
      leftToRight ? currentLevel.push(node.val) : currentLevel.unshift(node.val);
      
      // Queue additions remain the same
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
    leftToRight = !leftToRight; // Flip direction for next level
  }
  return result;
};


/**
 * Right side view 
 * 
 * Collect the right-most node at each "level", creating a view of the tree from the right side
 * 
 * Only adds a node to the result if it's the last node at its level
*/

const rightSideView = (root: TreeNode | null): number[] => {
  if (!root) return [];
  
  const result: number[] = [];
  const queue: TreeNode[] = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      
      // Only add the rightmost node of each level
      if (i === levelSize - 1) {
        result.push(node.val);
      }
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};


/**
 * Notes
 * Parent Node Tracking (LC 863 All Nodes K distance in Binary tree)
 * 
const queue: Array<[TreeNode, TreeNode | null]> = [[root, null]]; // [node, parent]
const parentMap = new Map<number, TreeNode | null>();

while (queue.length > 0) {
  const [node, parent] = queue.shift()!;
  parentMap.set(node.val, parent);
  
  if (node.left) queue.push([node.left, node]);
  if (node.right) queue.push([node.right, node]);
}

 */

/**
 * Yes, we can simulate post order behavior with BFS using two passes
 *  - First BFS to build a graph with parent pointers
 *  - Second BFS from leaves up to the root
 * 
 * LC 1376 (minimum time to inform all employees)
 */

/**
 * BiDirectional BFS
 *  - Start BFS from source and target simultaneously
 *  - Used in word ladder (LC 127)
 *  - Much faster for finding shortest pathws in large trees/graphs
 */

/**
 * Multi-source BFS
 * Start BFS from multiple sources (Rotting Oranges - LC 994)
 */


/*

Popular LC Questions using BFS Adaptations 

"Binary Tree Level Order Traversal" (LC 102) - Basic BFS
"Binary Tree Zigzag Level Order Traversal" (LC 103) - Level direction tracking
"Binary Tree Right Side View" (LC 199) - Last node per level
"All Nodes Distance K in Binary Tree" (LC 863) - Graph building + multi-directional BFS
"Word Ladder" (LC 127) - Graph representation + shortest path
"Rotting Oranges" (LC 994) - Multi-source BFS + time tracking
"Minimum Height Trees" (LC 310) - Bottom-up approach with BFS

*/
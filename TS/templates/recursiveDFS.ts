/**
 * at each node, we push the node value into our results list, 
 * then recursively traverse its left and right children
 * 
 * Datastructures used to collect results would be - Sets, maps, arrays
 * The order of operations differs
 * 
 * Preorder -> Node -> Left -> Right
 * Inorder -> Left -> Node -> Right
 * Postorder -> Left -> Right -> Node
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


const dfsPreorder = (root: TreeNode | null): number[] => {
    const result:number[] = [];

    const dfs = (node: TreeNode | null) => {
        if(!node) return;

        result.push(node.val);

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return result;
}


/**
 * Adapting the template
 * 
 * Find Root-to-leaf paths with a target sum

We start at the root and begin a depth-first traversal
As we go down each branch, we:
Add each node to our current path
Subtract its value from our remaining sum
Check if we've reached a leaf AND our remaining sum is zero

We explore the entire left subtree before the right subtree (due to DFS nature)
When we backtrack (using the pop() operation), we remove nodes from our path as we return up the tree

This ensures that when we start exploring a new branch, 
our path only contains ancestors of the current node

 */

const pathSum = (root: TreeNode | null, targetSum: number): number[][] => {
    const result: number[][] = [];

    const dfs = (node: TreeNode | null, currentPath: number[], remainingSum: number):void => {
        if(!node) return;

        currentPath.push(node.val);

        if(!node.left && !node.right && remainingSum === node.val) {
            result.push([...currentPath]);
        }

        dfs(node.left, currentPath, remainingSum - node.val);
        dfs(node.right, currentPath, remainingSum - node.val);

        currentPath.pop();
    }

    dfs(root, [], targetSum);
    return result;
}

/**
 * Max Depth
 * 
 * At each node, get the depth of its left and right subtrees,
 * return the longer tree 
 * 
 * added depth parameter, changed return type,
 * added Math.max to get larger of both subtrees
 */

const maxDepthDFS = (root: TreeNode | null) =>{
    const dfs = (node: TreeNode | null, depth: number) => {
        if(!node) return depth;
        
        // pre order posture
        const leftDepth = dfs(node.left, depth + 1);
        const rightDepth =  dfs(node.right, depth + 1);

        return Math.max(leftDepth, rightDepth);
    }

    dfs(root, 0);
}


/**
 * Validating BST
 * 
 * added min/max params to track valid range for nodes
 * early return when violation is found
 */

const isValidBST = (root: TreeNode | null) => {
    const dfs = (node: TreeNode | null, min: number | null, max: number | null) => {
        if(!node) return;

        if((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }

        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    }
}

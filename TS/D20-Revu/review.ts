class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor (val:number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const invertBinaryTree = (root: TreeNode | null): TreeNode | null => {
    if(!root) return null;

    // pre-order traversal; swap left and right subtrees at each node
    [root.left, root.right] = [root.right, root.left];

    invertBinaryTree(root.left);
    invertBinaryTree(root.right);
    return root;
}


const getTreeHeight = (root: TreeNode | null) => {
    if(!root) return 0;

    let leftTreeHeight = getTreeHeight(root.left);
    let rightTreeHeight =  getTreeHeight(root.right);

    // taller subtree + node 
    return Math.max(leftTreeHeight, rightTreeHeight) + 1;
}

const getDiameter = (root: TreeNode | null): number => {
    if(!root) return 0;

    const pathThroughRoot = getTreeHeight(root.left) + getTreeHeight(root.right);

    const leftDiameter = getDiameter(root.left);
    const rightDiameter =  getDiameter(root.right);

    return Math.max(pathThroughRoot, Math.max(leftDiameter, rightDiameter));
}

const balancedBinaryTree = (root: TreeNode | null):boolean => {
    if(!root) return false;

    let leftTreeHeight = getTreeHeight(root.left);
    let rightTreeHeight = getTreeHeight(root.right);

    if(Math.abs(leftTreeHeight - rightTreeHeight) > 1) {
        return false;
    }
    return true;
}

const sameTree = (root1: TreeNode | null, root2: TreeNode | null): boolean => {
    if(!root1 || !root2) return false;
    if(!root1 && !root2) return true;

    if(root1.left !== root2.left || root1.right !== root2.right) return false;

    return sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right);
}


const isSubTree =  (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if(!root) return false;
    if(!root && !subRoot) return true;  // both empty is true
    if(!subRoot) return true; // empty subroot is always a subtree 

    // at each node check if the node matches the subtree
    if (sameTree(root, subRoot)) return true;

    return sameTree(root.left, subRoot) || sameTree(root.right, subRoot);
}


const LCABTree = (root: TreeNode | null, p:number, q:number):number => {
    if(!root) return 0;
    if(!p) return q;
    if(!q) return p;
    // also handles the case where one is parent of the other as they are automatically in the same subtree
    if(root.val < q && root.val < p) {
        // same subtree
        LCABTree(root.right, p, q);
    }
    if(root.val > q && root.val > p) {
        // same subtree
        LCABTree(root, p, q);
    }
    // current root is the LCA
    return root.val;
}

const traverseBFS = (root: TreeNode | null): TreeNode[] => {
    if(!root) return [];
    let queue: TreeNode[] = [root];
    let result: TreeNode[] = [];

    while(queue.length > 0) {
        const currentNode = queue.shift()!;

        result.push(currentNode);
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
    }
    return result;
}


const rightSideViewBFS = (root: TreeNode | null): TreeNode[] => {
    if(!root) return [];

    const queue: TreeNode[] = [root];
    let result: TreeNode[] = [];

    while(queue.length > 0) {
        const levelSize = queue.length;

        for(let i = 0;  i < levelSize; i++) {
            let currentNode = queue.shift()!;

            if(i === levelSize - 1) {
                result.push(currentNode); // add last element at each "level" to results array
            }
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
    }
    return result;
}

const rightSideViewDFS = (root: TreeNode | null): number[] => {
    // Result array to store the right side view
    const result: number[] = [];
    
    // Helper function to perform DFS
    const dfs = (node: TreeNode | null, depth: number): void => {
      if (!node) return;
      
      // If this is the first node we've seen at this depth
      // it must be the rightmost node at this depth
      if (depth === result.length) {
        result.push(node.val);
      }
      
      // Visit right child first, then left child
      dfs(node.right, depth + 1);
      dfs(node.left, depth + 1);
    };
    // Start DFS from the root at depth 0
    dfs(root, 0);
    return result;
  }
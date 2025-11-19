
class TreeNode {
    val: number;
    leftChild: TreeNode | null;
    rightChild: TreeNode | null;
    
    constructor(val: number) {
      this.val = val;
      this.leftChild = null;
      this.rightChild = null;
    }
  }

/**
 * 
 * General algorithm
 *  
 * Print the root node
 * Traverse down the left subtree and print all non-leaf left child nodes (left boundary)
 * Print ALL leaf nodes across the tree - leading to the right side of the tree
 * Traverse UP the right subtree and print all non-leaf right child nodes (right boundary)
 * 
 * but how do we traverse a tree in reverse? post order traversal
 * 
 */

const printLeftBoundary = (root: TreeNode): TreeNode[] => {
    if(!root) return [] as TreeNode[];
    let result: TreeNode[] = [];

    if(root.leftChild || root.rightChild) { // if root is not a leaf
        result.push(root);
    }

    const traverse = (root: TreeNode | null, isLeftBoundary:boolean) => {
        if(!root) return; // base case handles nullity

        // add node to result if its a boundary node and NOT a leaf
        if(isLeftBoundary && (root.leftChild || root.rightChild)) {
            result.push(root);
        }  

        traverse(root.leftChild, isLeftBoundary);
        traverse(root.rightChild, isLeftBoundary && !root.leftChild);  // only go right if right comes from an boundary node as is the only child
    }
    traverse(root.leftChild, true);
    return result;
}


const printLeafNodes = (root:TreeNode | null): TreeNode[] => {
    if(!root) return [];
    let result: TreeNode[] = []; 

    const traverse = (root: TreeNode | null) => {
        if(!root) return;

        if(!root.leftChild && !root.rightChild) {
            result.push(root); // capture leaf 
        }
        traverse(root.leftChild);
        traverse(root.rightChild);
    }
    traverse(root);
    return result
}

const printRightBoundary = (root: TreeNode | null): TreeNode[] => {
    if(!root) return [];
    let result: TreeNode[] = [];

    const traverse = (node: TreeNode | null, isRightBoundary: boolean) => {
        if(!node) return;

        // Process children first (post-order)
        traverse(node.leftChild, isRightBoundary && !node.rightChild);
        traverse(node.rightChild, isRightBoundary);

        // Process current node after children
        if(isRightBoundary && (node.leftChild || node.rightChild)) {
            result.push(node); // Add non-leaf right boundary nodes
        }
    }
    traverse(root.rightChild, true);
    return result;
}

  const boundaryTraverse = (root: TreeNode) => {
    if(!root.leftChild && !root.rightChild) {
        return [root];
    }
    // Get the root separately
    const result: TreeNode[] = [root];

    let leftBoundary = printLeftBoundary(root);
    let leafNodes = printLeafNodes(root);
    let rightBoundary =  printRightBoundary(root);

    return [...result,...leftBoundary,...leafNodes,...rightBoundary]; // might need to remove duplicates
  }
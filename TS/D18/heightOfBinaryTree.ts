
class TreeNode {
    val: number;
    leftChild: TreeNode | null;
    rightChild: TreeNode | null

    constructor(val:number){
        this.val = val;
        this.leftChild = null;
        this.rightChild = null;
    }
}


const heightOfBinaryTreeBFS = (root: TreeNode): number => {
    if(!root) return 0;
    let height = 0;
    let queue: TreeNode[] = [root];

    while(queue.length > 0) {
        let levelSize =  queue.length;

        for(let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift()!;

            if(currentNode.leftChild) queue.push(currentNode.leftChild);
            if(currentNode.rightChild) queue.push(currentNode.rightChild);
        }
        height++; // increment height at the end of each "level" until we reach deepest leaf
    }
    return height;
}

const maxHeightDFS = (root: TreeNode | null): number => {
    // Base case: empty tree has depth 0
    if (root === null) {
        return 0;
    }
    
    // Recursively find the depth of left and right subtrees
    const leftDepth = maxHeightDFS(root.leftChild);
    const rightDepth = maxHeightDFS(root.rightChild);
    
    // Return 1 (for current node) plus the deeper of the two subtrees
    return 1 + Math.max(leftDepth, rightDepth);
}

// O(n) and O(h) space
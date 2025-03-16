


/**
 * 
 * @param Initial approach using travers function
 * @returns 
 */
const invertTree = (root:any) =>{
    traverse(root);
    return root;
}


const traverse = (root:any) => {
    if(root === null) return;

    // pre order position
    // what each node needs to do is swap its left and right children
    [root.left, root.right] = [root.right, root.left];

    traverse(root.left);
    traverse(root.right);
}


/**
 * Secondary approach using divide and conquer 
 *
 */

const invertTreeDP = (root:any) => {
    if (root === null) return;


    // divide problem into subtrees and invert separately
    let left = invertTree(root.left);
    let right = invertTree(root.right);

    // swap left and right child nodes 
    root.left = right;
    root.right = left;

    return root;
}

// The core of this "problem decomposition" approach is to give the recursive function a suitable definition, then use this definition to interpret your code
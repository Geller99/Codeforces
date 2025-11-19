class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor (val: number) {
        this.val = val;
        this.left =  null;
        this.right =  null;
    }
}

const allRootToLeafPaths = (root: TreeNode | null): number[][] => {
    const result: number[][] = [];
    const currentPath: number[] = [];

    const dfs = (node: TreeNode | null) => {
        if(!node) return;

        // add current path
        currentPath.push(node.val);

        // if node is a leaf, add copy of current path to result
        if(!node.left && !node.right){
            result.push([...currentPath]);
        } else {
            
            // keep exploring
            dfs(node.left);
            dfs(node.right);
        }
        // Backtrack
        currentPath.pop();
    }
    dfs(root);
    return result;
}
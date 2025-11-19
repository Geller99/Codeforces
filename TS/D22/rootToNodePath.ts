
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

const rootToNodePath = (root: TreeNode | null, target: number): number[] => {
    if(!root) return [];
    
    const findPath = (node: TreeNode | null, target:number, path: number[]):boolean => {
        if(!node) return false;

        // add current node to path
        path.push(node.val);

        if(node.val === target) return true; // path found

        if(findPath(node.left, target, path) || findPath(node.right, target, path)) {
            return true;
        }

        path.pop(); // pop current from path if backtracking
        return false;
    }
    const result: number[] = [];
    findPath(root, target, result);
    return result;
}
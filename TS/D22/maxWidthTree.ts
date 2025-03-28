
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


const maxWidthTree = (root: TreeNode | null): number => {
    if(!root) return 0;
    let globalMaxWidth = 0;
    let queue: TreeNode[] = [];

    queue.push(root);
    while(queue.length > 0) {
        const levelSize =  queue.length;
        globalMaxWidth = Math.max(levelSize, globalMaxWidth); // update diameter at each "level"

        for(let i = 0 ; i < levelSize; i++){
          const currentNode = queue.shift()!;
            
          if(currentNode.left) queue.push(currentNode.left);
          if(currentNode.right) queue.push(currentNode.right);
        }
    }
    return globalMaxWidth;
}
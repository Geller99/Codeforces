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

const zigZagTraverse = (root: TreeNode | null): number[][] => {
    if(!root) return [];

    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    let leftToRight: boolean = true;

    while(queue.length > 0){
        const levelSize = queue.length;
        const currentLevel: number[] = [];

        for(let i = 0; i < levelSize; i++) {
            const currentNode: TreeNode = queue.shift()!;

            currentLevel.push(currentNode.val);

            if(currentNode.leftChild)  queue.push(currentNode.leftChild);
            if(currentNode.rightChild)  queue.push(currentNode.rightChild);
        }

        if(!leftToRight) {
            currentLevel.reverse;
        }
        result.push(currentLevel);
        leftToRight =  !leftToRight;
    }
    return result;
}

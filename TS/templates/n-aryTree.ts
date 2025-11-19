
// N-ary tree traversal template 
class MultiTree {
    val: number;
    children: MultiTree[];

    constructor(val:number) {
        this.val = val;
        this.children = [];
    }
}


const traverse = (root:MultiTree) => {
    if(!root) return;

    // pre-order
    for(let i= 0; i < root.children.length ; i++ ){
        traverse(root.children[i]);
    }
    // post-order
}


const levelOrderTraverse = (root: MultiTree) => {
    if(!root) return;

    let queue: MultiTree[] = [root];

    while(queue.length > 0) {
        let currentNode = queue.shift()!;

        console.log(currentNode.val);

        for(let child of currentNode.children) {
            queue.push(child);
        }
    } 
}
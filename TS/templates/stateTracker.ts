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

type ResultType<T> = T;


enum TraversalResult {
    Success,
    Failure,
    Continue
}


const treeStateProblem = <T>(
    root: TreeNode | null, 
    initialValue: ResultType<T>
): ResultType<T> => {
    // Helper function with explicit type parameters
    const helper = (
        node: TreeNode | null, 
        stateParam1: T, 
        stateParam2: any[]
    ): TraversalResult => {
        // Base case
        if (!node) return TraversalResult.Failure;

        // Modify state before exploring the tree
        if (Array.isArray(stateParam1)) {
            (stateParam1 as number[]).push(node.val);
        }

        
        const targetCondition = false; 
        if (targetCondition) {
            return TraversalResult.Success;
        }

        // Explore children/subtrees
        const leftResult = helper(node.left, stateParam1, stateParam2);
        const rightResult = helper(node.right, stateParam1, stateParam2);

        // Handle results from children
        if (leftResult === TraversalResult.Success || 
            rightResult === TraversalResult.Success) {
            return TraversalResult.Success;
        }

        // Backtrack or revert state if needed
        if (Array.isArray(stateParam1)) {
            (stateParam1 as number[]).pop();
        }

        return TraversalResult.Failure;
    }   

    helper(root, initialValue, []);
    return initialValue;
}

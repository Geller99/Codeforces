function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity;

    function dfs(node: TreeNode | null): number {
        if (!node) return 0;

        let leftGain = Math.max(dfs(node.left), 0);
        let rightGain = Math.max(dfs(node.right), 0);

        // path passing through this node
        let priceNewPath = node.val + leftGain + rightGain;

        // update global max
        maxSum = Math.max(maxSum, priceNewPath);

        // return one-side gain
        return node.val + Math.max(leftGain, rightGain);
    }

    dfs(root);
    return maxSum;
}
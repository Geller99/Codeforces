func goodNodes(root *TreeNode) int {
    var dfs func(*TreeNode, int) int
    dfs = func(node *TreeNode, maxSoFar int) int {
        if node == nil {
            return 0
        }

        good := 0
        if node.Val >= maxSoFar {
            good = 1
            maxSoFar = node.Val
        }

        return good + dfs(node.Left, maxSoFar) + dfs(node.Right, maxSoFar)
    }

    return dfs(root, root.Val)
}

func kthSmallest(root *TreeNode, k int) int {
    count := 0
    result := 0

    var inorder func(*TreeNode)
    inorder = func(node *TreeNode) {
        if node == nil {
            return
        }
        inorder(node.Left)

        count++
        if count == k {
            result = node.Val
            return
        }

        inorder(node.Right)
    }

    inorder(root)
    return result
}

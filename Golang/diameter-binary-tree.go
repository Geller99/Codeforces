func diameterOfBinaryTree(root *TreeNode) int {
    maxDiameter := 0 
    var depth func(node *TreeNode) int
    depth = func (node *TreeNode) int{
        if node == nil{
            return 0
        }
        leftDepth := depth(node.Left)
        rightDepth := depth(node.Right)

        if leftDepth + rightDepth>maxDiameter{
            maxDiameter = leftDepth+rightDepth
        }
        return 1 + max(leftDepth, rightDepth)
    }
    depth(root)
    return maxDiameter
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

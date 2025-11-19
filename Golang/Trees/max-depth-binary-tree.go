/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxDepth(root *TreeNode) int {
    // Iterate through the Binary Tree
    // Keep track of the no. of nodes along the longest path from the node down to the farthest leaf node
    // Return the result 

    if root == nil {
        return 0
    }

    leftDepth := maxDepth(root.Left)
    rightDepth := maxDepth(root.Right)

    return 1 + max(leftDepth, rightDepth)
}

func max(a,b int) int{
  if a > b{
    return a
  }
  return b
}

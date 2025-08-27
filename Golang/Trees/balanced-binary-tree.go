/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isBalanced(root *TreeNode) bool {
    var depthFirstSearch func(*TreeNode) int
    depthFirstSearch = func(node *TreeNode) int {
        if node == nil {
            return 0
        }
        leftHeight := depthFirstSearch(node.Left)
         if leftHeight == -1{
            return -1
         }
        rightHeight := depthFirstSearch(node.Right)
         if rightHeight == -1{
            return -1
         }
        if leftHeight - rightHeight > 1 || rightHeight - leftHeight > 1{
            return -1
        }
        if leftHeight > rightHeight{
            return leftHeight + 1
        }
        return rightHeight + 1
    }
    return depthFirstSearch(root) != -1
}

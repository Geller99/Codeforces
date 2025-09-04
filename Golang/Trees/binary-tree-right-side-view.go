func rightSideView(root *TreeNode) []int {
    if root == nil {
        return []int{}
    }

    result := []int{}
    queue := []*TreeNode{root}

    for len(queue) > 0 {
        levelSize := len(queue)
        var val int

        for i := 0; i < levelSize; i++ {
            node := queue[0]
            queue = queue[1:]

            val = node.Val // update with latest seen in this level

            if node.Left != nil {
                queue = append(queue, node.Left)
            }
            if node.Right != nil {
                queue = append(queue, node.Right)
            }
        }

        // last node of this level is visible from the right
        result = append(result, val)
    }

    return result
}

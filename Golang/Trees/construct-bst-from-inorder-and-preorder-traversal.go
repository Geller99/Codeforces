func buildTree(preorder []int, inorder []int) *TreeNode {
    if len(preorder) == 0 || len(inorder) == 0 {
        return nil
    }

    rootVal := preorder[0]
    root := &TreeNode{Val: rootVal}

    // find root index in inorder
    var rootIdx int
    for i, num := range inorder {
        if num == rootVal {
            rootIdx = i
            break
        }
    }

    // split inorder into left and right parts
    leftIn := inorder[:rootIdx]
    rightIn := inorder[rootIdx+1:]

    // split preorder into left and right parts (skip root)
    leftPre := preorder[1 : 1+len(leftIn)]
    rightPre := preorder[1+len(leftIn):]

    // recursively build subtrees
    root.Left = buildTree(leftPre, leftIn)
    root.Right = buildTree(rightPre, rightIn)

    return root
}

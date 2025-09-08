func generateTrees(n int) []*TreeNode{
	if n == 0 {
		return []*TreeNode{}
	}
	return build(1,n)
}

func build(start, end int) []*TreeNode{
	if start > end {
		return []*TreeNode(nil)
	}

	result := []*TreeNode{}

	for i := start; i <= end; i++{
		leftTrees := build(start, i-1)
		rightTrees := build(i+1, end)

		for _, l := range leftTrees{
			for _, r := range rightTrees{
				root := &TreeNOde{Val: i}
				root.Left = l
				root.Right = r
				result = append(result, root)
			}
		}
	}
	return result
}
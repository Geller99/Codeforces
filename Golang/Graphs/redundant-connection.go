func findRedundantConnection(edges [][]int) []int{
	parent := make([]int, len(edges)+1)

	for i := range parent{
		parent[i] = i
	}

	var find func(int) int
	find = func(x int) int{
		if parent[x] == x{
			return x
		}
		parent[x] = find(parent[x])
		return parent[x]
	}

	for _, edge := range edges{
		nodeA := edge[0]
		nodeB := edge[1]

		rootA := find(nodeA)
		rootB := find(nodeB)

		if rootA == rootB {
			return edge
		}

		parent[rootA] = rootB
	}

	return nil
}
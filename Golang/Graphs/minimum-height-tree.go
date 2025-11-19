func findMinHeightTrees(n int, edges [][]int) []int {
    if n == 1 {
        return []int{0}
    }

    // build adjacency list + degree count
    graph := make([][]int, n)
    degree := make([]int, n)

    for _, edge := range edges {
        a, b := edge[0], edge[1]
        graph[a] = append(graph[a], b)
        graph[b] = append(graph[b], a)
        degree[a]++
        degree[b]++
    }

    // initialize leaves
    leaves := []int{}
    for i := 0; i < n; i++ {
        if degree[i] == 1 {
            leaves = append(leaves, i)
        }
    }

    remainingNodes := n
    for remainingNodes > 2 {
        remainingNodes -= len(leaves)
        newLeaves := []int{}

        for _, leaf := range leaves {
            for _, neighbor := range graph[leaf] {
                degree[neighbor]--
                if degree[neighbor] == 1 {
                    newLeaves = append(newLeaves, neighbor)
                }
            }
        }

        leaves = newLeaves
    }

    return leaves
}

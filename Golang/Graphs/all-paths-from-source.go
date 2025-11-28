func allPathsSourceTarget(graph [][]int) [][]int {
    n := len(graph)
    target := n - 1
    
    // allPaths will store the final list of complete paths.
    var allPaths [][]int
    
    // currentPath tracks the nodes in the path being explored during the DFS.
    currentPath := []int{}

    // Define the DFS function
    var dfs func(u int)
    dfs = func(u int) {
        // 1. Add current node to the path
        currentPath = append(currentPath, u)

        // 2. Goal Check
        if u == target {
            // A complete path found. MUST make a copy of currentPath
            // because currentPath will be modified during backtracking.
            pathCopy := make([]int, len(currentPath))
            copy(pathCopy, currentPath)
            allPaths = append(allPaths, pathCopy)
        } else {
            // 3. Explore Neighbors
            for _, v := range graph[u] {
                dfs(v)
            }
        }
        
        // 4. Backtrack: Remove the current node from the path
        // This is crucial for exploring other branches.
        currentPath = currentPath[:len(currentPath)-1]
    }

    // Start DFS from the source node (0)
    dfs(0)
    
    return allPaths
}
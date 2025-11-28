unc isBipartite(graph [][]int) bool {
    n := len(graph)
    // 0: Uncolored (Unvisited)
    // 1: Color A (Set A)
    // 2: Color B (Set B)
    color := make([]int, n)

    // The graph may be disconnected, so we iterate through all nodes
    // to ensure every component is checked.
    for i := 0; i < n; i++ {
        if color[i] == 0 {
            // Start BFS on a new, unvisited component
            
            queue := list.New()
            queue.PushBack(i)
            color[i] = 1 // Start the component with Color 1

            for queue.Len() > 0 {
                // Dequeue
                u := queue.Remove(queue.Front()).(int)
                
                // The expected color for neighbors is the opposite of u's color.
                // If color[u] is 1, neighbor_color is 2. If color[u] is 2, neighbor_color is 1.
                neighborColor := 3 - color[u] 
                
                for _, v := range graph[u] {
                    if color[v] == 0 {
                        // Case 1: Uncolored. Assign the expected color and enqueue.
                        color[v] = neighborColor
                        queue.PushBack(v)
                    } else if color[v] == color[u] {
                        // Case 2: Conflict. Neighbor v has the same color as u.
                        // This indicates an odd-length cycle, so it is not bipartite.
                        return false
                    }
                    // Case 3: color[v] == neighborColor (Correctly colored). Do nothing.
                }
            }
        }
    }

    // If the entire graph is colored without conflict, it is bipartite.
    return true
}
func findRedundantDirectedConnection(edges [][]int) []int {
    n := len(edges)
    parent := make([]int, n+1)
    for i := 1; i <= n; i++ {
        parent[i] = i
    }

    // Track nodes that have two parents
    p := make([]int, n+1)
    var cand1, cand2 []int

    // Step 1: Detect a node with two parents
    for _, e := range edges {
        u, v := e[0], e[1]
        if p[v] == 0 {
            p[v] = u
        } else {
            // Found two parents
            cand1 = []int{p[v], v} // first edge
            cand2 = []int{u, v}    // second edge
            // Ignore the second edge for now by marking it invalid
            e[1] = 0
        }
    }

    // Reset union-find for cycle detection
    uf := make([]int, n+1)
    for i := 1; i <= n; i++ {
        uf[i] = i
    }

    var find func(x int) int
    find = func(x int) int {
        if uf[x] != x {
            uf[x] = find(uf[x])
        }
        return uf[x]
    }

    union := func(a, b int) bool {
        pa, pb := find(a), find(b)
        if pa == pb {
            return false
        }
        uf[pb] = pa
        return true
    }

    // Step 2: Detect cycle
    for _, e := range edges {
        u, v := e[0], e[1]
        if v == 0 {
            continue // skip candidate2
        }
        if !union(u, v) {
            // Cycle detected
            if cand1 == nil {
                return e // no two-parent issue → return this edge
            }
            return cand1 // two-parent + cycle → remove first parent edge
        }
    }

    // Step 3: No cycle → two-parent issue only
    return cand2
}

func canFinish(numCourses int, prerequisites [][]int) bool {
    // build adjacency list
    graph := make([][]int, numCourses)
    for _, pre := range prerequisites {
        a, b := pre[0], pre[1]
        graph[b] = append(graph[b], a) // edge b -> a
    }

    // 0 = unvisited, 1 = visiting, 2 = visited
    state := make([]int, numCourses)

    var dfs func(int) bool
    dfs = func(course int) bool {
        if state[course] == 1 { // found a cycle
            return false
        }
        if state[course] == 2 { // already processed
            return true
        }

        state[course] = 1 // mark as visiting
        for _, next := range graph[course] {
            if !dfs(next) {
                return false
            }
        }
        state[course] = 2 // mark as done
        return true
    }

    // check every course
    for i := 0; i < numCourses; i++ {
        if state[i] == 0 {
            if !dfs(i) {
                return false
            }
        }
    }

    return true
}

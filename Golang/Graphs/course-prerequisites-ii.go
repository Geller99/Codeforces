func findOrder(numCourses int, prerequisites [][]int) []int {
    graph := make([][]int, numCourses)
    indegree := make([]int, numCourses)

    // build graph and indegree array
    for _, pre := range prerequisites {
        a, b := pre[0], pre[1]
        graph[b] = append(graph[b], a)
        indegree[a]++
    }

    // start with courses that have no prerequisites
    queue := []int{}
    for i := 0; i < numCourses; i++ {
        if indegree[i] == 0 {
            queue = append(queue, i)
        }
    }

    result := []int{}
    for len(queue) > 0 {
        curr := queue[0]
        queue = queue[1:]
        result = append(result, curr)

        // reduce indegree of neighbors
        for _, next := range graph[curr] {
            indegree[next]--
            if indegree[next] == 0 {
                queue = append(queue, next)
            }
        }
    }

    // if not all courses are in result → cycle exists
    if len(result) != numCourses {
        return []int{}
    }
    return result
}

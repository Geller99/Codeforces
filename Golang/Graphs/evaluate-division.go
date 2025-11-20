package graphs


// Edge represents a connection to another variable with a specific weight (division result)
type Edge struct {
	to     string
	weight float64
}

func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
	// 1. Build the Graph
	// Map: Variable -> List of Connections
	graph := make(map[string][]Edge)

	for i, eq := range equations {
		u, v := eq[0], eq[1]
		val := values[i]

		// Add forward edge: u / v = val
		graph[u] = append(graph[u], Edge{to: v, weight: val})
		// Add backward edge: v / u = 1 / val
		graph[v] = append(graph[v], Edge{to: u, weight: 1.0 / val})
	}

	results := make([]float64, len(queries))

	// 2. Process each query
	for i, q := range queries {
		start, end := q[0], q[1]

		// Edge Case: If either variable doesn't exist in our graph
		if _, ok := graph[start]; !ok {
			results[i] = -1.0
			continue
		}
		if _, ok := graph[end]; !ok {
			results[i] = -1.0
			continue
		}

		// Edge Case: a / a is always 1.0 (if a exists)
		if start == end {
			results[i] = 1.0
			continue
		}

		// 3. Perform DFS to find path from start to end
		visited := make(map[string]bool)
		results[i] = dfs(start, end, 1.0, visited, graph)
	}

	return results
}

// DFS function traverses the graph
// currentVal is the accumulated product of weights along the path so far
func dfs(curr, target string, currentVal float64, visited map[string]bool, graph map[string][]Edge) float64 {
	// Mark current node as visited so we don't go in circles
	visited[curr] = true

	// Look at all neighbors
	for _, neighbor := range graph[curr] {
		if neighbor.to == target {
			// Found the target! Return the accumulated value * this edge's weight
			return currentVal * neighbor.weight
		}

		// If we haven't visited this neighbor yet, keep searching
		if !visited[neighbor.to] {
			result := dfs(neighbor.to, target, currentVal*neighbor.weight, visited, graph)
			// If result is not -1.0, it means we found a valid path down this road
			if result != -1.0 {
				return result
			}
		}
	}

	// If we exhaust all neighbors and don't find the target
	return -1.0
}
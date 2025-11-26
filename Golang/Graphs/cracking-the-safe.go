func crackSafe(n int, k int) string {
	// Total number of possible passwords is k^n
	// We want a sequence where every substring of length n is unique.
	// This is effectively finding an Eulerian path in a de Bruijn graph.

	// visited keeps track of the edges (passwords) we have already processed.
	visited := make(map[string]bool)
	var sb strings.Builder

	// Start node is a string of (n-1) zeros.
	// For n=1, this is an empty string.
	startNode := strings.Repeat("0", n-1)

	// DFS function to traverse the graph
	var dfs func(node string)
	dfs = func(node string) {
		// Try every digit from 0 to k-1
		for x := 0; x < k; x++ {
			digit := strconv.Itoa(x)
			// The edge represents the full n-digit password formed
			// by the current prefix (node) + the new digit.
			edge := node + digit

			if !visited[edge] {
				visited[edge] = true
				
				// The next node is the suffix of length n-1
				// Example: node="01", digit="2" -> edge="012" -> nextNode="12"
				nextNode := edge[1:]
				
				dfs(nextNode)
				
				// Append digit in post-order traversal
				sb.WriteString(digit)
			}
		}
	}

	dfs(startNode)

	// Because we built the string in post-order (reverse), the digits are
	// effectively added to the "front" of the sequence relative to the path flow.
	// However, usually in Hierholzer's for De Bruijn, we just need to append
	// the initial starting context (the n-1 zeros) to the result to complete it.
	result := sb.String() + startNode

	return result
}
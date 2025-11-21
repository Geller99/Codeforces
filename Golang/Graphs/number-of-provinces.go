package main

import "fmt"

func findCircleNum(isConnected [][]int) int {
	n := len(isConnected)
	visited := make([]bool, n) // Keeps track of visited cities
	provinces := 0

	// Define DFS function
	var dfs func(int)
	dfs = func(currentCity int) {
		// Mark the city we are currently standing on as visited
		visited[currentCity] = true

		// Look at all possible neighbors
		for neighbor := 0; neighbor < n; neighbor++ {
			// Check two things:
			// 1. Is there a direct connection? (isConnected == 1)
			// 2. Have we NOT visited this neighbor yet?
			if isConnected[currentCity][neighbor] == 1 && !visited[neighbor] {
				dfs(neighbor) // Recursively visit the neighbor
			}
		}
	}

	// Iterate through every city in the list
	for i := 0; i < n; i++ {
		// If we encounter a city we haven't touched yet,
		// it means we've found a brand new, unexplored province.
		if !visited[i] {
			provinces++ // Count it
			dfs(i)      // Explore the WHOLE province and flag everyone in it
		}
	}

	return provinces
}

func main() {
	// Example: City 0 and 1 are connected. City 2 is alone.
	// [1, 1, 0]
	// [1, 1, 0]
	// [0, 0, 1]
	matrix := [][]int{
		{1, 1, 0},
		{1, 1, 0},
		{0, 0, 1},
	}
	
	fmt.Println("Number of Provinces:", findCircleNum(matrix)) 
    // Output: 2
}
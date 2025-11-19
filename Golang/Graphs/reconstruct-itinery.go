func findItinerary(tickets [][]string) []string {
	// 1. Create the Graph (Adjacency List)
	// Map: Departure Airport -> List of Arrival Airports
	targets := make(map[string][]string)

	for _, ticket := range tickets {
		from, to := ticket[0], ticket[1]
		targets[from] = append(targets[from], to)
	}

	// 2. Sort destinations lexically
	// This ensures that if we have a choice, we pick the alphabetical winner first
	for key := range targets {
		sort.Strings(targets[key])
	}

	// 3. Depth First Search (DFS)
	var route []string

	// We declare the function variable first so we can use it recursively
	var visit func(string)
	
	visit = func(airport string) {
		// While there are still tickets leaving this airport...
		for len(targets[airport]) > 0 {
			// Pick the next destination (always the first one because we sorted them)
			nextDest := targets[airport][0]
			
			// REMOVE the ticket from the list (so we don't use it again)
			// This is basically: list = list[1:]
			targets[airport] = targets[airport][1:]
			
			// Recursively visit the next destination
			visit(nextDest)
		}
		
		// 4. Add to route (Post-order traversal)
		// We only add the airport to the route when we are "stuck" 
		// (loop is finished) and returning from recursion.
		route = append(route, airport)
	}

	// Start at JFK
	visit("JFK")

	// 5. Reverse the result
	// Because we added the last stops first, the list is backwards.
	for i, j := 0, len(route)-1; i < j; i, j = i+1, j-1 {
		route[i], route[j] = route[j], route[i]
	}

	return route
}
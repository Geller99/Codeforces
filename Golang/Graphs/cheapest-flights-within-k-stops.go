import "math"

func findCheapestPrice(n int, flights [][]int, src int, dst int, k int) int {
    // We use a modified Bellman-Ford/DP approach.
    // k stops means k+1 flights.

    // Initialize costs. We need two arrays to track costs from the current step
    // and the previous step (based on flight count).
    // Initial cost to reach any city is infinity.
    const infinity = math.MaxInt32

    // previousCost[i]: Min cost to reach city i with exactly j-1 flights.
    previousCost := make([]int, n)
    for i := range previousCost {
        previousCost[i] = infinity
    }
    // Cost to reach the source city with 0 flights is 0.
    previousCost[src] = 0

    // minOverallPrice: Tracks the overall minimum cost to reach the destination
    // found across all valid stop counts (1 to k+1 flights).
    minOverallPrice := infinity
    
    // We iterate k+1 times (for 1, 2, ..., k+1 flights)
    for j := 1; j <= k+1; j++ {
        // currentCost[i]: Min cost to reach city i with exactly j flights.
        // Initialize currentCost based on costs from the previous step.
        // This is crucial: we must allow the path to reuse previous minimums
        // if a shorter path with fewer than j flights was already found.
        currentCost := make([]int, n)
        copy(currentCost, previousCost)
        
        // Iterate through all flights to update costs for step j
        for _, flight := range flights {
            from := flight[0]
            to := flight[1]
            price := flight[2]

            // If the 'from' city was reachable in j-1 flights, we can take this flight.
            if previousCost[from] != infinity {
                newPrice := previousCost[from] + price
                // Update the cost to the 'to' city using exactly j flights.
                currentCost[to] = min(currentCost[to], newPrice)
            }
        }
        
        // Update the minimum price found so far to the destination
        minOverallPrice = min(minOverallPrice, currentCost[dst])

        // Prepare for the next iteration (j+1)
        previousCost = currentCost
    }
    
    // If minOverallPrice is still infinity, no path was found.
    if minOverallPrice == infinity {
        return -1
    }
    return minOverallPrice
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
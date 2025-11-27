func couplesHoldingHands(row []int) int {
    n := len(row) / 2 // Total number of couples
    
    // 1. Initialize Union-Find structure
    // parent[i] stores the representative/root of the set containing couple i
    parent := make([]int, n)
    for i := 0; i < n; i++ {
        parent[i] = i
    }
    
    // Ranks/Size can be used for optimization but are omitted here for simplicity.
    
    // Find function with path compression
    var find func(i int) int
    find = func(i int) int {
        if parent[i] == i {
            return i
        }
        parent[i] = find(parent[i]) // Path compression
        return parent[i]
    }
    
    // Union function
    union := func(i, j int) {
        rootI := find(i)
        rootJ := find(j)
        if rootI != rootJ {
            parent[rootI] = rootJ // Merge set I into set J
        }
    }
    
    // 2. Iterate through the row in pairs and perform Union operations
    for i := 0; i < n; i++ {
        personA := row[2*i]
        personB := row[2*i+1]
        
        // Couple ID = floor(person_id / 2)
        coupleA := personA / 2
        coupleB := personB / 2
        
        // If they are not from the same couple, they are misplaced.
        // Union their respective couple groups.
        if coupleA != coupleB {
            union(coupleA, coupleB)
        }
    }
    
    // 3. Count the number of cycles (N - components)
    // The number of necessary swaps is N - (number of connected components)
    
    // Count the number of unique roots (connected components)
    components := 0
    for i := 0; i < n; i++ {
        if parent[i] == i {
            components++
        }
    }
    
    // Minimum Swaps = N - Number of Connected Components
    return n - components
}
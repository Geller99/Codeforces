func longestIncreasingPath(matrix [][]int) int {
    if len(matrix) == 0 || len(matrix[0]) == 0 {
        return 0
    }

    rows := len(matrix)
    cols := len(matrix[0])
    memo := make([][]int, rows)
    for i := range memo {
        memo[i] = make([]int, cols)
    }

    directions := [][]int{{1,0}, {-1,0}, {0,1}, {0,-1}}

    var dfs func(r, c int) int
    dfs = func(r, c int) int {
        // If already computed, return cached value
        if memo[r][c] != 0 {
            return memo[r][c]
        }

        maxLen := 1 // path length starting from this cell itself

        for _, dir := range directions {
            nr, nc := r+dir[0], c+dir[1]
            if nr >= 0 && nr < rows && nc >= 0 && nc < cols && matrix[nr][nc] > matrix[r][c] {
                length := 1 + dfs(nr, nc)
                if length > maxLen {
                    maxLen = length
                }
            }
        }

        memo[r][c] = maxLen
        return maxLen
    }

    longest := 0
    for r := 0; r < rows; r++ {
        for c := 0; c < cols; c++ {
            if pathLen := dfs(r, c); pathLen > longest {
                longest = pathLen
            }
        }
    }

    return longest
}
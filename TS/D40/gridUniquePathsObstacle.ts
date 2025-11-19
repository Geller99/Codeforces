const uniquePathsWithObstacles = (obstacleGrid: number[][]): number => {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));
    
    // Base case: first column
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1;
    }
    
    // Base case: first row  
    for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
        dp[0][j] = 1;
    }
    
    // Fill grid
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    
    return dp[m-1][n-1];
};
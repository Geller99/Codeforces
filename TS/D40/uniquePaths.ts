const uniquePaths = (m: number, n: number): number => {
    // Create dp grid
    const dp: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));
    
    // Base cases: top row and left column
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    for (let j = 0; j < n; j++) dp[0][j] = 1;
    
    // Fill grid: each cell = sum of above + left
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
};


const uniquePaths2 = (m: number, n: number): number => {
    const dp: number[] = Array(n).fill(1);
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j-1];
        }
    }
    
    return dp[n-1];
};
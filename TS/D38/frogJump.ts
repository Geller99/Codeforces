const frogJump = (heights: number[]): number => {
  const n = heights.length;
  const dp = new Array(n);
  dp[n-1] = 0;
  
  for (let i = n-2; i >= 0; i--) {
    const jump1 = Math.abs(heights[i] - heights[i+1]) + dp[i+1];
    const jump2 = i+2 < n ? Math.abs(heights[i] - heights[i+2]) + dp[i+2] : Infinity;
    dp[i] = Math.min(jump1, jump2);
  }
  
  return dp[0];
};
const minCostClimbingStairs = (cost: number[]): number => {
  const n = cost.length;
  const dp = new Array(n + 1);
  dp[n] = 0; // Past the end
  dp[n-1] = cost[n-1];
  
  for (let i = n-2; i >= 0; i--) {
    dp[i] = cost[i] + Math.min(dp[i+1], dp[i+2]);
  }
  
  return Math.min(dp[0], dp[1]); // Can start from either 0 or 1
};
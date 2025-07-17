const frogJumpK = (heights: number[], k: number): number => {
 const n = heights.length;
 const dp = new Array(n);
 
 dp[n-1] = 0;
 
 for (let i = n-2; i >= 0; i--) {
   dp[i] = Infinity;
   
   for (let j = 1; j <= k && i + j < n; j++) {
     const cost = Math.abs(heights[i] - heights[i + j]) + dp[i + j];
     dp[i] = Math.min(dp[i], cost);
   }
 }
 
 return dp[0];
};
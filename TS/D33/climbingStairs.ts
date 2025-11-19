
const climbStairs = (n: number): number => {
  if (n <= 1) return 1;
  
  const dp = Array(n + 1).fill(0);
  
  // Base cases
  dp[0] = 1; // 1 way to be at step 0 (start there)
  dp[1] = 1; // 1 way to reach step 1
  
  // Fill left to right
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; 
  }
  
  return dp[n];
};


const climbStairsRecursive = (n: number): number => {
  const memo = new Map<number, number>();  
  
  const dp = (step: number): number => {
    if (step <= 1) return 1;
    
    if (memo.has(step)) {
      return memo.get(step)!;
    }
    
    // Recurrence: ways(n) = ways(n-1) + ways(n-2)
    const result = dp(step - 1) + dp(step - 2);
    memo.set(step, result);
    return result;
  };
  
  return dp(n);
};
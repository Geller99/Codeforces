const countSubstrings = (s: string): number => {
  const n = s.length;
  const dp = Array(n).fill(null).map(() => Array(n).fill(false));
  let count = 0;
  
  // Single characters
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    count++;
  }
  
  // Two characters
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      count++;
    }
  }
  
  // Longer substrings
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        count++;
      }
    }
  }
  
  return count;
};
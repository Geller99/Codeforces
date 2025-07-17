const wordBreak = (s: string, wordDict: string[]): boolean => {
  const wordSet = new Set(wordDict);
  const dp = new Array(s.length + 1);
  dp[s.length] = true;
  
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = false;
    for (let j = i + 1; j <= s.length; j++) {
      if (wordSet.has(s.slice(i, j)) && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }
  
  return dp[0];
};
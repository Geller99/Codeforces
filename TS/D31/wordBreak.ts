
const wordBreak = (s: string, wordDict: string[]): boolean => {
  const n = s.length;
  const dp = Array(n + 1).fill(false);
  
  // Base case: empty string can always be broken
  dp[n] = true;
  
  // Fill from right to left (end to beginning)
  for (let i = n - 1; i >= 0; i--) {
    // Try each word in dictionary
    for (const word of wordDict) {
      // Check if word fits and matches at position i
      if (i + word.length <= n && s.substring(i, i + word.length) === word) {
        // If word matches AND remaining can be broken
        if (dp[i + word.length]) {
          dp[i] = true;
          break; // Found one valid break, no need to check more
        }
      }
    }
  }
  
  return dp[0];
};



const wordBreakRecursive = (s: string, wordDict: string[]): boolean => {
  const memo = new Map<number, boolean>();
  
  const dp = (startIndex: number): boolean => {
    // Base case: reached end of string
    if (startIndex >= s.length) return true;
    
    // Check memo
    if (memo.has(startIndex)) {
      return memo.get(startIndex)!;
    }
    
    // Try each word in dictionary
    for (const word of wordDict) {
      // Check if word matches at current position
      if (s.substring(startIndex).startsWith(word)) {
        // If word matches AND remaining can be broken
        if (dp(startIndex + word.length)) {
          memo.set(startIndex, true);
          return true;
        }
      }
    }
    
    // No valid break found
    memo.set(startIndex, false);
    return false;
  };
  
  return dp(0);
};
const wordBreak = (s: string, wordDict: string[]): boolean => {
 const wordSet = new Set(wordDict);
 const dp = new Array(s.length + 1);
 dp[s.length] = true; // Base case: empty string
 
 for (let i = s.length - 1; i >= 0; i--) {
   dp[i] = false;
   
   for (let j = i + 1; j <= s.length; j++) {
     const substring = s.slice(i, j);
     
     if (wordSet.has(substring) && dp[j]) {
       dp[i] = true;
       break; // Found one valid way, we're done
     }
   }
 }
 
 return dp[0];
};
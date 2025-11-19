const numDecodings = (s: string): number => {
 const n = s.length;
 const dp = new Array(n + 1);
 dp[n] = 1; // Base case: empty string has 1 way
 
 for (let i = n - 1; i >= 0; i--) {
   dp[i] = 0;
   
   // Take 1 digit (if valid)
   if (s[i] !== '0') {
     dp[i] += dp[i + 1];
   }
   
   // Take 2 digits (if valid)
   if (i + 1 < n) {
     const twoDigit = parseInt(s.slice(i, i + 2));
     if (twoDigit >= 10 && twoDigit <= 26) {
       dp[i] += dp[i + 2];
     }
   }
 }
 
 return dp[0];
};
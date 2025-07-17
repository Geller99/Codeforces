

const coinChange = (coins: number[], amount: number): number => {
 const dp = new Array(amount + 1).fill(Infinity);
 dp[0] = 0; // Base case: 0 coins needed to make amount 0
 
 for (let i = 1; i <= amount; i++) {
   for (const coin of coins) {
     if (coin <= i) {
       dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
     }
   }
 }
 
 return dp[amount] === Infinity ? -1 : dp[amount];
};
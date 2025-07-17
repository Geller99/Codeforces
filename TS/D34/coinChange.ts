
const coinChange = (coins: number[], amount: number): number => {
    if(!coins.length) return 0;
    if(amount === 0) return 0;

    const dp = Array(amount + 1).fill(Infinity);

    dp[0] = 0; // base case

    for(let i = 1; i <= amount; i++) {
        for(const coin of coins) {
            if(coin <= i){
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}


const coinChange = (coins: number[], amount: number): number => {
    if (!amount) return 0;
    
    // Array size: amount + 1 (for amounts 0 to amount)
    const dp = Array(amount + 1).fill(Infinity);
    
    // Base case: 0 coins needed for amount 0
    dp[0] = 0;
    
    // Fill for each amount from 1 to target
    for (let i = 1; i <= amount; i++) {
        // Try each coin
        for (const coin of coins) {
            if (coin <= i) {  // Check if coin fits
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }
    // Return result (or -1 if impossible)
    return dp[amount] === Infinity ? -1 : dp[amount];
}



const coinChangeRecursive = (coins: number[], amount: number): number => {
    if (!amount) return 0;

    const memo = new Map<number, number>();

    const dp = (remainingAmount: number): number => {
        // Base case
        if (remainingAmount < 0) return Infinity;  // Impossible
        if (remainingAmount === 0) return 0;       // Success

        if (memo.has(remainingAmount)) {
            return memo.get(remainingAmount)!;
        }

        let minCoins = Infinity;  // Start with "impossible"

        // Try each coin
        for (const coin of coins) {
            const result = 1 + dp(remainingAmount - coin);
            minCoins = Math.min(minCoins, result);
        }

        memo.set(remainingAmount, minCoins);
        return minCoins;
    };

    const result = dp(amount);
    return result === Infinity ? -1 : result;
}
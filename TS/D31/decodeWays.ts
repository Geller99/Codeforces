
const decodeWaysIterative = (s: string): number => {
    if (!s.length || s[0] === '0') return 0;
    
    const n = s.length;
    const dp = Array(n + 1).fill(0);
    
    // Base cases
    dp[0] = 1; // Empty string has 1 way
    dp[1] = 1; // First character (already validated above)
    
    for (let i = 2; i <= n; i++) {
        // Single digit choice
        const singleDigit = s[i - 1];
        if (singleDigit !== '0') {
            dp[i] += dp[i - 1];
        }
        
        // Double digit choice  
        const doubleDigit = s[i - 2] + s[i - 1];
        if (doubleDigit >= '10' && doubleDigit <= '26') {
            dp[i] += dp[i - 2];
        }
    }
    return dp[n];
}


const decodeWaysRecursive = (s: string): number => {
    if (!s.length || s[0] === '0') return 0;
    const memo = new Map<number, number>();
    
    const dp = (index: number): number => {
        // Base case: reached end of string
        if (index >= s.length) return 1;
        
        // Check memo
        if (memo.has(index)) {
            return memo.get(index)!;
        }
        
        let ways = 0;
        // Choice 1: Take single digit (if valid)
        const singleDigit = s[index];
        if (singleDigit !== '0') {
            ways += dp(index + 1);
        }
        // Choice 2: Take double digit (if valid and in bounds)
        if (index + 1 < s.length) {
            const doubleDigit = s[index] + s[index + 1];
            if (doubleDigit >= '10' && doubleDigit <= '26') {
                ways += dp(index + 2);
            }
        }
        memo.set(index, ways);
        return ways;
    };  
    return dp(0);
};
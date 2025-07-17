const decodeWays = (s: string): number => {
    if(!s.length || s[0] === '0') return 0;

    const n = s.length;
    const dp = Array(n + 1).fill(0);

    dp[n] = 1; // base case

    for(let i = n -1; i >= 0; i--) {
        if(s[i] !== '0') {
            dp[i] += dp[i + 1];
        }

        if(i + 1 < n) {
            const twoDigit = s[i] + s[i + 1];
            if(twoDigit >= '10' && twoDigit <= '26'){
                dp[i] += dp[i + 2];
            }
        }
    }
    return dp[0];
}
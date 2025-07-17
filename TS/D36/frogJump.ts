
const frogJump = (heights: number[]): number => {
    const n =  heights.length;
    const dp = new Array(n);


    dp[n-1] = 0;
    if(n > 1) dp[n-2] = Math.abs(heights[n-2] - heights[n-1]);

    for(let i = n-3; i >= 0; i--){
        const jumpOne = Math.abs(heights[i] - heights[i+1]) + dp[i+1];
        const jumpTwo = Math.abs(heights[i] - heights[i-2] + dp[i+2]);
        dp[i] = Math.min(jumpOne, jumpTwo);
    }

    return dp[0];
}
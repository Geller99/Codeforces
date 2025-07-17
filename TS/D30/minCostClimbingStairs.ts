

const minCostClimbingStairsRecursive = (cost: number[]): number => {
    if(!cost.length) return 0;

    const memo = new Map<number, number>();
    const dp = (step: number): number => {
        if(step >= cost.length){
            return 0;
        }
        if(memo.has(step)){
            return memo.get(step)!;
        }

        const oneStep = cost[step] + dp(step + 1);
        const twoSteps = cost[step] + dp(step + 2);
        const result = Math.min(oneStep, twoSteps);

        memo.set(step, result);
        return result;
    }  
    // can start from index 0 or index 1
    return Math.min(dp(0), dp(1));
}


const minCostClimbingStairsIterative = (cost: number[]): number => {
       if(!cost.length) return 0;
       const n = cost.length;

       const dp = Array(n+1).fill(0);
    
       // base case, cost at the top
       dp[n] = 0;  // already at top of stairway

       for(let i = n-1; i >= 0; i--) {
        // apply recurrence relation to each step
        const oneStep = cost[i] + dp[i + 1];
        const twoSteps = cost[i] + dp[i + 2];
        dp[i] = Math.min(oneStep, twoSteps);

       }
       return Math.min(dp[0], dp[1]);
}
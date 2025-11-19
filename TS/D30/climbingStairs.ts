

const climbingStairsIterative = (n: number): number => {
    if(!n) return 0;

    const ways = Array(n+1).fill(0);

    // base case
    ways[n] = 1;  // number of ways from the top stair to the top stair = 1;
    
    for(let i = n - 1; i >= 0; i--){
        ways[i] = ways[i + 1] + (i + 2 < ways.length? ways[i + 2] : 0);
    }
    return ways[0];
}



const climbingStairsRecursive = (n: number): number => {
    if(!n) return 0;
    const memo = new Map<number, number>();  // Map<step, ways>;

    const dp = (step: number): number => {
        // base case: reached or passed target
        if(step >= n) return 1;
        
        if(memo.has(step)) {
            return memo.get(step)!;
        }

        const oneStep = dp(step + 1);
        const twoSteps = dp(step + 2);

        const ways = oneStep + twoSteps;
        memo.set(step, ways);
        return ways;
    };

    return dp(0);
}
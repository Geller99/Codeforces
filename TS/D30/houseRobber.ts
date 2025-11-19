
const houseRobberIterative = (nums: number[]): number => {
    if(!nums.length) return 0;
    if(nums.length === 1) return nums[0];

    const n = nums.length;
    const maxCost = Array(n).fill(0);

    maxCost[0] = nums[0];

     for(let i = 1; i < n; i++){
        const robCurrent = nums[i] + (i >= 2 ? maxCost[i - 2] : 0);  // More explicit
        const skipCurrent = maxCost[i - 1];
        maxCost[i] = Math.max(robCurrent, skipCurrent);
    }
    return maxCost[n - 1];  // return last valid index
}


const houseRobberRecursive = (nums: number[]) => {
    if(!nums.length) return 0;
    if(nums.length === 1) return nums[0];

    const memo = new Map<number, number>();  // house, maxCost

    const dp = (house: number): number => {
        if(house < 0) return 0;        // Out of bounds
        if(house === 0) return nums[0]; // Base case: only house 0

        if(memo.has(house)) {
            return memo.get(house)!;
        }
        const robCurrent = nums[house] + dp(house - 2)
        const skipCurrent = dp(house - 1);
        const result = Math.max(robCurrent, skipCurrent)
        memo.set(house,result);;
        return result;
    } 
    return dp(nums.length - 1);
}
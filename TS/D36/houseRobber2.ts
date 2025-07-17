

const houseRobberTwo = (nums: number[]): number => {
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);  // either or


    const rob = (houses: number[]): number => {
        let prev2 = 0, prev1 = 0;

        for (const house of houses){
            const current = Math.max(prev1, prev2 + house);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }

    return Math.max(rob(nums.slice(0, -1)), rob(nums.slice(1)));
}
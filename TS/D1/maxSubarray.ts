

const maxSubArray = (nums: number[]): number  => {
    let currentSum = nums[0];
    let maxSum = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        
        //extend previous subarray or start new one?
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // update maxSum
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
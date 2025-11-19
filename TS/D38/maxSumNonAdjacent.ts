const maxSumNonAdjacent = (nums: number[]): number => {
  if (nums.length === 1) return nums[0];
  
  let prev2 = nums[0];
  let prev1 = Math.max(nums[0], nums[1]);
  
  for (let i = 2; i < nums.length; i++) {
    const current = Math.max(nums[i] + prev2, prev1);
    prev2 = prev1;
    prev1 = current;
  }
  
  return prev1;
};
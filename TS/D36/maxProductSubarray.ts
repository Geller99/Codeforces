const maxProduct = (nums: number[]): number => {
  let maxHere = nums[0];
  let minHere = nums[0];
  let result = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    const temp = maxHere;
    
    maxHere = Math.max(nums[i], maxHere * nums[i], minHere * nums[i]);
    minHere = Math.min(nums[i], temp * nums[i], minHere * nums[i]);
    
    result = Math.max(result, maxHere);
  }
  
  return result;
};
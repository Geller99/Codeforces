
const maxProduct = (nums: number[]): number => {
  if (!nums.length) return 0;
  
  let maxEndingHere = nums[0];
  let minEndingHere = nums[0];
  let globalMax = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    const temp = maxEndingHere;
    
    maxEndingHere = Math.max(
      nums[i],                    // Start fresh
      maxEndingHere * nums[i],    // Extend previous max
      minEndingHere * nums[i]     // Extend previous min
    );
    
    minEndingHere = Math.min(
      nums[i],                    // Start fresh
      temp * nums[i],             // Extend previous max
      minEndingHere * nums[i]     // Extend previous min
    );
    
    globalMax = Math.max(globalMax, maxEndingHere);
  }
  
  return globalMax;
};
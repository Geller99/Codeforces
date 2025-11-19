
const maxProductSubarrayOptimized = (nums: number[]): number[] => {
 if (!nums.length) return [];
 
 let globalMax = nums[0];
 let bestStart = 0;
 let bestEnd = 0;
 let currentStart = 0;
 
 let maxEndingHere = nums[0];
 let minEndingHere = nums[0];
 
 for (let i = 1; i < nums.length; i++) {
   if (maxEndingHere === globalMax && i - 1 === bestEnd) {
     // Current best ends at previous position
   }
   
   const temp = maxEndingHere;
   maxEndingHere = Math.max(nums[i], maxEndingHere * nums[i], minEndingHere * nums[i]);
   minEndingHere = Math.min(nums[i], temp * nums[i], minEndingHere * nums[i]);
   
   // If we started fresh (nums[i] is the max), update start
   if (maxEndingHere === nums[i]) {
     currentStart = i;
   }
   
   if (maxEndingHere > globalMax) {
     globalMax = maxEndingHere;
     bestStart = currentStart;
     bestEnd = i;
   }
 }
 
 return nums.slice(bestStart, bestEnd + 1);
};

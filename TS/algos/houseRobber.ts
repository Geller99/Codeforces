/* Problem Statement: 
   Given an integer array nums representing the amount of money of each house,
   return the maximum amount of money you can rob tonight without alerting the police.
*/

function rob(nums: number[]): number {
   if (nums.length === 0) return 0; // No houses to rob
   if (nums.length === 1) return nums[0]; // Only one house to rob

   // Initialize variables to track the maximum sums
   let prevMax = 0; // Maximum sum without robbing the current house
   let currMax = 0; // Maximum sum including the current house

   for (let num of nums) {
       // Temporarily store currMax before updating it
       let temp = currMax;

       // Update currMax to include the current house OR skip it
       currMax = Math.max(prevMax + num, currMax);

       // Update prevMax to the old currMax
       prevMax = temp;
   }

   // Return the final maximum sum
   return currMax;
}


/*  
   Initialize Edge Cases:
    - If nums is empty, return 0 (nothing to rob).
    - If nums has only one house, return nums[0].

   Set Up Variables:
    - Use prevMax to represent the maximum sum up to the previous house.
    - Use currMax to represent the maximum sum up to the current house.
   
   Iterate Through Houses:
     For each house:
      - Calculate the new currMax as the maximum of:
      - prevMax + nums[i] (robbing the current house).
      - currMax (skipping the current house).
      - Update prevMax to the old currMax.

   Return the Result:
     At the end, currMax will contain the maximum amount of money that can be robbed.
*/
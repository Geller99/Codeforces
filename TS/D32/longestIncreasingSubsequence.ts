
// Insight: At each position, I check ALL previous positions to see which ones I can extend, then pick the best option.
/**
 * The Algorithm:
At each position i:

Check ALL previous positions (0, 1, 2, ..., i-1)
For each previous position j: Can I extend it?

Is nums[j] < nums[i]? (increasing requirement)
If yes: potential length = length_at_j + 1


Pick the best length among all valid extensions
Store that best length for position i
 */

const longestIncreasingSubsequenceIterative = (nums: number[]): number => {
  if (!nums.length) return 0;
  
  const n = nums.length;
  const dp = Array(n).fill(1); // Each position starts with length 1
  
  // For each position i
  for (let i = 1; i < n; i++) {
    // Check all previous positions j
    for (let j = 0; j < i; j++) {
      // Can we extend position j with element at position i?
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  
  // Return the maximum length found at any position
  return Math.max(...dp);
};


const longestIncreasingSubsequenceRecursive = (nums: number[]): number => {
  if (!nums.length) return 0;
  
  const memo = new Map<string, number>();
  
  const dp = (index: number, prevIndex: number): number => {
    // Base case: reached end of array
    if (index >= nums.length) return 0;
    
    // Create memo key
    const key = `${index}-${prevIndex}`;
    if (memo.has(key)) {
      return memo.get(key)!;
    }
    
    // Choice 1: Skip current element
    const skip = dp(index + 1, prevIndex);
    
    // Choice 2: Take current element (if valid)
    let take = 0;
    if (prevIndex === -1 || nums[prevIndex] < nums[index]) {
      take = 1 + dp(index + 1, index);
    }
    
    const result = Math.max(skip, take);
    memo.set(key, result);
    return result;
  };
  
  return dp(0, -1); // Start at index 0, no previous element
};
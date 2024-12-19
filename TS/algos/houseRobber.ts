

const rob = (nums: number[]):number => {
    if (!nums) return 0;
    if (nums.length === 1) return nums[0];

    let prevTwo = nums[0]              // store the first house as a "choice"
    let prevOne = Math.max(nums[0], nums[1])   // rob the house with more funds between houses 1 and two

    for(let i = 2; i < nums.length; i++) {  // starting from house 3, ROB or SKIP based on previous two houses
        let current = Math.max(nums[i] + prevTwo, prevOne);  // 

        prevTwo = prevOne
        prevOne = current;
    }

    return prevOne;
}



/*
House Robber - Dynamic Programming Solution

Core Concept:
At each house, we're using previous optimal solutions to make current decisions.

Problem Framework:
- Given: Array of house values
- Goal: Find maximum possible loot without triggering security (no adjacent houses)
- At each house: Choose between "rob" or "skip"
  - If rob: MUST skip next house
  - If skip: CAN rob next house

Solution Strategy:
1. Store optimal values for first two houses:
   - prev2 = first house value
   - prev1 = max(first house, second house)

2. Starting from third house, at each step compare:
   - Rob current house + best result from two houses back
   - vs
   - Skip current house and keep best result from previous house

3. Keep track of only two values:
   - prev2 (best result ending two houses back)
   - prev1 (best result from previous house)
   
This is DP because we:
- Store and use previous optimal solutions
- Build current optimal solution from these stored values
- Only need to look back 2 steps at any point
*/
// Problem: Trapping Rain Water
// Given an array of non-negative integers representing the elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.

function trap(height: number[]): number {
    // If the array is empty, no water can be trapped
    if (height.length === 0) return 0;

    // Initialize two pointers: 
    // `left` starts at the beginning of the array, `right` starts at the end
    let left = 0, right = height.length - 1;

    // Variables to track the maximum heights encountered from the left and right
    let leftMax = 0, rightMax = 0;

    // Variable to store the total amount of trapped water
    let trappedWater = 0;

    // Iterate until the two pointers meet
    while (left < right) {
        // If the height at the left pointer is less than the height at the right pointer:
        if (height[left] < height[right]) {
            // Update the maximum height encountered on the left
            leftMax = Math.max(leftMax, height[left]);

            // Calculate water trapped at the current left position
            trappedWater += Math.max(0, leftMax - height[left]);

            // Move the left pointer to the right
            left++;
        } else {
            // Update the maximum height encountered on the right
            rightMax = Math.max(rightMax, height[right]);

            // Calculate water trapped at the current right position
            trappedWater += Math.max(0, rightMax - height[right]);

            // Move the right pointer to the left
            right--;
        }
    }

    // Return the total amount of trapped water
    return trappedWater;
}

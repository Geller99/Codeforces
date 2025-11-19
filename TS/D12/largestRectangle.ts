const largestRectangleArea = (heights: number[]): number => {
    let stack: number[] = [];
    let maxArea = 0;
    
    // Append a sentinel value to ensure the stack is fully processed
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()!]; // Pop last index
            
            // Calculate width
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            
            // Compute max area
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
};

// Test case
console.log(largestRectangleArea([7, 1, 7, 2, 2, 4])); // Output: 8

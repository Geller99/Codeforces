

const isInRange = (index: number, start: number, end: number) => index >= start && index < end;

const getNewMax = (nums: number[], start: number, end: number) => {
    let maxVal = nums[start];
    let maxIndex = start;
    
    for(let i = start; i <= end; i++) {
        if(nums[i] >= maxVal) { // >= to take rightmost max if there are duplicates
            maxVal = nums[i];
            maxIndex = i;
        }
    }
    
    return { maxVal, maxIndex };
};


const slidingWindowMax = (nums: number[], k: number) => {
    if (k <= 0 || k > nums.length) return [];
    if (k === 1) return nums;

    let left = 0;
    let right = k - 1;
    let result: number[] = [];
    let prevMaxIndex = 0;
    let currentMax = 0;

    // Initialize first window
    const { maxVal, maxIndex } = getNewMax(nums, left, right);
    currentMax = maxVal;
    prevMaxIndex = maxIndex;
    result.push(currentMax);

    while(right < nums.length - 1) { 
        left++;
        right++;

        // Check if previousMax is in range and find max between new window value and previous max
        if(isInRange(prevMaxIndex, left, right)) {
            if(nums[right] >= currentMax) {  // >= to handle duplicates
                currentMax = nums[right];
                prevMaxIndex = right;
            }
        } else {
            // Find new max in current window
            const { maxVal, maxIndex } = getNewMax(nums, left, right);
            currentMax = maxVal;
            prevMaxIndex = maxIndex;
        }

        result.push(currentMax);
    }

    return result;
};
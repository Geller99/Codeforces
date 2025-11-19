

const maxArea = (heights: number[]) => {
    if(!heights.length) return 0;

    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;

    while (left < right) {

        let currentArea = Math.min(heights[left], heights[right]) * (right - left)
        maxArea = Math.max(currentArea, maxArea);

        if (heights[left] < heights[right]) {
            left++;
        }
        else {
            right--;
        }
    }

    return maxArea;
}
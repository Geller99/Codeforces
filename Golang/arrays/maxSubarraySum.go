package arrays


func maxSubarraySum (nums []int) (int, []int) {
	if(len(nums) == 0) {
		return 0, []int{}
	}

	maxSum := nums[0] 
	currentSum := nums[0]
	start, end, tempStart := 0, 0, 0

	for i := 1; i < len(nums); i++ {
		if nums[i] > currentSum + nums[i] {
			currentSum = nums[i]
			tempStart = i;
		} else {
			currentSum = currentSum + nums[i]
		}
		
		if currentSum > maxSum {
			maxSum = currentSum
			start = tempStart
			end = i
		}
	}
	result := make([]int, end-start + 1)
	copy(result, nums[start:end+1])

	return maxSum, result
}
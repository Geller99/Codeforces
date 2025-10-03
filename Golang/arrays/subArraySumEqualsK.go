package arrays

func subArraySumEqualsK (nums []int, k int) int {
	if(len(nums) <= 1 && nums[0] != k) {return 0}

	count := 0
	prefixSum := 0

	sumMap := map[int]int{0:1}

	for _, num := range nums {
		// add current number to running prefix
		prefixSum += num

		// check if (prefixSum - k) exists in map
		// if it does we've found subarrays with sum = k
		if freq, exists := sumMap[prefixSum - k]; exists {
			count += freq
		}

		sumMap[prefixSum]++
	}
	return count	
}
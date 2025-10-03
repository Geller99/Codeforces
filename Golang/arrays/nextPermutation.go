package arrays 

func nextGreatestPermutation (nums []int) {
	n := len(nums)
	
	i := n - 2
	// find the pivot, iterating right to left
	for i >= 0 && nums[i] >= nums[i+1] {
		i--
	}

	// if no pivot, array is in descending order, reverse all 
	if i == -1 {
		reverse(nums, 0, n-1)
		return 
	}

	// find the smallest value to the right of the pivot that is greater than the pivot
	j := n - 1 
	for nums[j] <= nums[i] {
		j--
	}
	

	// swap pivot with number we found
	nums[i], nums[j] = nums[j], nums[i]

	reverse(nums, i+1, n-1)
}

func reverse(nums []int, start, end int) {
	for start < end {
		nums[start], nums[end] = nums[end], nums[start]
		start++
		end--
	}
}
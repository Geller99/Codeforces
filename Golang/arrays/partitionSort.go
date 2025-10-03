package arrays


func partitionSort (nums []int) []int { 
	low, mid, high := 0, 0, len(nums) - 1 

	for mid <= high {
		if(nums[mid] == 0) {
			nums[low], nums[mid] = nums[mid], nums[low]
			low++
			mid++
		} else if (nums[mid] == 1) {
			mid++
		} else if (nums[mid] == 2) {
			nums[mid], nums[high] = nums[high], nums[mid]
			high--
		}
	}
	return nums
}


package arrays


func rearrangeArrays(nums []int) []int {
	n := len(nums)
	result := make([]int, n)

	posIdx := 0			// start at index 0 for +ve numbers
	negIdx := 1			// start at index 1 for -ve numbers


	// single pass through the array
	for i := 0; i < n; i++ {
		if nums[i] > 0 {
			result[posIdx] =  nums[i]
			posIdx +=2
		} else {
			result[negIdx] = nums[i]
			negIdx +=2
		}
	}
	return result;
}
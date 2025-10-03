package arrays


func getMajorityElement (nums []int) int {
	n := len(nums)
	store := make(map[int]int)
	
	// frequency counter
	for _, value := range nums {
		store[value]++ 
	}

	// find element occuring greater than n/2 times 
	for key, count := range store {
		if count > n/2 {
			return key 
		}
	}
	return -1
}
package arrays


func findMajorityElements (nums []int) []int {
	n := len(nums)
	if(n <= 1) { return []int{} }
	
	result := []int{}
	freqCounter := make(map[int]int)  

	for _, val := range nums {
		freqCounter[val]++
	}

	for key := range freqCounter {
		if freqCounter[key] > n/3 {
			result = append(result, key)
		}
	}

	return result
}
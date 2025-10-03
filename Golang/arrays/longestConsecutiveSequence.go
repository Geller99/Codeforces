package arrays 


func longestConsecutiveSequence (nums []int) int {
	if(len(nums) == 0) {return 0}

	// put all nums in set for O(1) lookup
	set := make(map[int]struct{})  // to store numbers
	for _, v := range nums {
		set[v] = struct{}{}
	}

	longest := 0
	
	// check each number to see if it can start a sequence
	for num := range set {
		if _, exists := set[num-1]; !exists {
			currentNum := num
			currentStreak := 1
			for {
				if _, exists := set[currentNum+1]; exists {
					currentNum++
					currentStreak++
				} else {
					break
				}
			}
			longest = max(currentStreak, longest)
		}
	}
	return longest
}
package arrays


func GetMaxConsecutiveOnes(arr []int) int {
	localMax, globalMax := 0, 0
	for iterator := 0; iterator < len(arr); iterator++ {
		if arr[iterator] == 1 {
			localMax += 1
		} else {
			globalMax = max(globalMax, localMax)
			localMax = 0  // reset counter when we encounter a zero, end of prev streak of 1s
		}
	}
	return max(globalMax, localMax)  // array ends with a streak of 1s
}


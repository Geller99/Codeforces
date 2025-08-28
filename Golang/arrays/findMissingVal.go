package arrays


func findMissingHashMethod (arr []int, n int) int{
	freq := make(map[int]int)

	// Mark all present numbers
	for _, num := range arr {
		freq[num] = 1
	}

	// Find the missing one 
	for i := 1; i <= n; i++ {
		if freq[i] == 0 {
			return i
		}
	}
	return -1
}

func findMissingSummationMethod (arr []int, n int) int {
	expectedSum := n * (n + 1) / 2   // calculate the expected sum IF no nums were missing in that range 1 to N
	actualSum := 0

	for _, num := range arr {
		actualSum += num
	}
	return expectedSum - actualSum
}
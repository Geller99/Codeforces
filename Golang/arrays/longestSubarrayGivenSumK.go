package arrays

func longestSubarrayWithSum (arr []int, k int) int {
	left, sum, maxLen := 0, 0, 0

	for right := 0; right < len(arr); right++ {
		sum += arr[right]

		// shrink window if sum exceeds k
		for sum > k && left <= right {
			sum -= arr[left]
			left++
		}

		// update max length if sum equals K
		if sum == k {
			maxLen = max(maxLen, right - left + 1)
		}
	}
	return maxLen
}
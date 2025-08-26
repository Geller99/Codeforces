package arrays


// isSorted - simply verify that for every i, i - 1 < i and i + 1 > i

func isSorted (arr []int) bool {
	for i := 0; i < len(arr); i++ {
		if arr[i - 1] > arr[i] {
			return false
		}
	}
	return true
}
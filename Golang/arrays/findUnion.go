package arrays


func findUnion (arr1, arr2 []int) []int{
	i, j := 0, 0
	result := []int{}

	// compare values from each, add to set
	for i < len(arr1) && j < len(arr2) {
		if arr1[i] < arr2[j] {
			result = append(result, arr1[i])
			i++
		} else if arr1[i] > arr2[j] {
			result = append(result, arr2[j])
			j++
		} else {
			// equal? add once, skip both
			result = append(result, arr1[i])
			i++ 
			j++
		}
	}
	result = append(result, arr1[i:]...)
	result = append(result, arr2[j:]...)
	return result
}
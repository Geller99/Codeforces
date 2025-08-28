package arrays



func rotateK (arr []int, k int, direction string) []int {
	if(len(arr) <= 1) { return arr }

	k = k % len(arr)  

	if direction == "right" {
		k = len(arr) - k    
	}

	// save first k elements
	saved := make([]int, k)
	copy (saved, arr[:k])

	// shift remaining elements left
	copy (arr, arr[k:])

	// put saved elements at end
	copy(arr[len(arr)-k:], saved)

	return arr
}
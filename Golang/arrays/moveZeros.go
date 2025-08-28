
package arrays


func moveZeros (arr []int) []int {
	if(len(arr) <= 1) { return arr }
	
	// iterate over array, place non-zero values using place pointer
	placePtr := 0
	for tracePtr := 0; tracePtr < len(arr); tracePtr++ {
		if arr[tracePtr] != 0 {
			arr[tracePtr] = arr[placePtr]		// copy element from tracer to placer
			placePtr++							// increment place ptr
		}
	}

	// back fill with zeros
	for placePtr < len(arr) {
		arr[placePtr] = 0
		placePtr++
	}
	return arr
}
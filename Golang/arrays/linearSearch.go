package arrays


func linearSearch (arr []int, target int) int {
	if(len(arr) < 1) { return -1 }
	if(len(arr) == 1 && arr[0] != target) { return -1 }

	for tracer := 0; tracer < len(arr); tracer++ {
		if arr[tracer] == target {
			return tracer
		}
	}
	return -1
}
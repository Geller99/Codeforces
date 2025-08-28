
package arrays


// method one -> simply rearrange values in another array, O(n) space (extra) and O(n) time
// we maintain two pointers, whichever value is to the right of the first value, gets swapped with it


func leftRotate (arr []int) []int {
	length := len(arr)
	if(length <= 1) {
		return arr
	}

	p1 := 0
	p2 := 1

	for i := 0; i <= length - 1; i++ {
		if(p1 < length && p2 < length) {
			swap(arr, p1, p2);
			p1++;
			p2++;
		} 
	}
	return arr
}

func leftRotateExtraSpace(arr []int) []int {
    if len(arr) <= 1 {
        return arr
    }
    
    result := make([]int, len(arr))
    for i := 0; i < len(arr)-1; i++ {
        result[i] = arr[i+1]
    }
    result[len(arr)-1] = arr[0]
    
    return result
}

func swap (arr []int, idx1 int, idx2 int) {
	temp := arr[idx1]
	arr[idx1] = arr[idx2]
	arr[idx2] = temp
}
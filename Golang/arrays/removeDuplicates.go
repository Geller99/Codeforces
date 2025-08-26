package arrays

/*
What happens:
Read pointer checks every element
If element is new → copy it to write position, move write forward
If element is duplicate → skip it, write stays put

Result: All unique elements get packed to the front of the array.
*/


func removeDuplicates (arr []int) int {
	seen := make(map[int]bool)
	write := 0

	for read := 0; read < len(arr); read++ {
		if !seen [arr[read]] {
			seen[arr[read]] = true
			arr[write] = arr[read]
			write++
		}
	}
	return write
}
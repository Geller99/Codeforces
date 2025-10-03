package arrays


/* 
the provided array is most likely unsorted
so we can use the XOR method for O(1) space and O(n) time
OR the hashmap method for O(n) space and O(n) time
*/

func getSingularOccuringValue (nums []int) int {
	result := 0
	for _, num := range nums {
		result ^= num
	}
	return result
}
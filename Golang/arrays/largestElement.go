package arrays

import "sort"

// Find largest element in a given array

// Method 1: Sort the array in ascending order, the last element would be the largest - O(n Log n) time complexity

func findMaxSort(arr []int) int {
	sort.Ints(arr)
	return arr[len(arr) - 1]
}

// Method 2: Iterate the array, track a globalMax value and only update it IF we run into a larger value - O(N) time

func findMaxLinear (arr []int) int {
	max := arr[0]
	for i := 1; i < len(arr); i++ {
		if arr[i] > max {
			max = arr[i]
		}
	}
	return max
}
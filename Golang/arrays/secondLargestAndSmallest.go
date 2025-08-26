package arrays

import "math"

// Method -> Linear search
// We can simply track the largest and smallest values at each iteration and use that to store the previous largest value (second largest) and previous smallest value (second smallest)
// prevLargest and prevSmallest start as -1 and only change IF we find smaller values as we iterate



func findSecondSmallestAndLargest (arr []int) (int, int) {
	if len(arr) < 2 {
		return -1, -1
	}

	// variables to track as we pass over array
	largest, secondLargest := math.MinInt, math.MinInt
	smallest, secondSmallest := math.MinInt, math.MaxInt

	for _, num := range arr{
		// update largest and second largest
		if num > largest {
			secondLargest = largest
			largest = num
		} else if num > secondLargest && num != largest {
			secondLargest = num
		}

		if num < smallest {
			secondSmallest = smallest
			smallest = num
		} else if num < secondSmallest && num != smallest {
			secondSmallest = num
		}
	}

	// edge case, all elements the same
	if secondLargest == math.MinInt {
		secondLargest = -1
	}
	if secondSmallest == math.MinInt {
		secondSmallest = -1
	}

	return secondSmallest, secondLargest
}

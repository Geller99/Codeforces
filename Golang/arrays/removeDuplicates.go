package arrays

/*

What happens:
We maintain a fast and slow pointer
The fast pointer iterates the entire array and copies non duplicate values to the index of the slow pointer
The slow pointer moves forward each time we find a unique value, and places it there
Our goal is to maintain a [0...slow] subarray of unique values
The length of 0...slow is our final answer - k number of unique values

*/


func removeDuplicates (nums []int) int {   
	if(len(nums) < 1) { return 0 }
	if(len(nums) == 1) { return 1 }

	slow, fast := 0, 0

	for fast < len(nums) {
		if nums[fast] != nums[slow] {   // this means we've found a unique value 
			slow++  					// increment slow pointer so we can place the next unique value

		
			nums[fast] = nums[slow] 	// maintain nums[0...slow] without duplicates by overwriting
		}
		fast++
	}
	return slow + 1 // [0...slow] is num of unique values, index + 1 gives length of that subarray = k
}
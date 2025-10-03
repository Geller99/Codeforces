package arrays



func twoSum (nums []int, target int) []int {
	cache := make(map[int]int)

	for i, num := range nums {
		difference := target - num

		if index, exists := cache[difference]; exists {
			return []int{index,i}
		}
		cache[num] = i
	}
	return nil
}
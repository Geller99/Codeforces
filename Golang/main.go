package main

import(
	"fmt"
	"golang/arrays"
)

func main() {
	
	nums := []int {2,2,3,3}
	result := arrays.RemoveElement(nums, 3);

	fmt.Printf("Result: %d", result);
}
package arrays

import "fmt"

func fourDirections (matrix [][]int, startR, startC int) {
	rows := len(matrix)
	cols := len(matrix[0])

	// direction vectors: up, right, down, left
	directions := [][]int {{-1, 0}, {0, 1}, {1, 0}, {0, -1}}

	for _, dir := range directions {
		newR := startR + dir[0]
		newC := startC + dir[1]

		// bounds check
		if newR >= 0 && newR < rows && newC >= 0 && newC < cols {
			fmt.Println(matrix[newR][newC])
		}
	}
}
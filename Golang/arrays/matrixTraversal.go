package arrays

import "fmt"

func traverseRows (matrix [][]int) {
	rows := len(matrix)
	cols := len(matrix[0])


	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			fmt.Println(matrix[r][c])
		}
	}
}



func traverseColumns (matrix [][]int) {
	rows := len(matrix)
	cols := len(matrix[0])

	for c := 0; c < cols; c++ {
		for r := 0; r < rows; r++ {
			fmt.Println(matrix[r][c])
		}
	}
}
package arrays 


func setZeroes (matrix [][]int) {
	rows, cols := len(matrix), len(matrix[0])

	zeroRows := make(map[int]bool)
	zeroCols := make(map[int]bool)

	// find all original zeros and mark in storage maps
	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if matrix[r][c] == 0 {
				zeroRows[r] = true
				zeroCols[c] = true
			}
		}
	}

	// Zero out marked rows
	for r := range zeroRows {
		for c := 0; c < cols; c++ {
			matrix[r][c] = 0
		}
	}

	// Zero out marked cols
	for c := range zeroCols {
		for r := 0; r < rows; r++ {
			matrix[r][c] = 0
		}
	}
}
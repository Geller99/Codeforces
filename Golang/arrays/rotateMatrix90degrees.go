package arrays

// approach - transpose + reverse rows 


func rotateMatrix90Degrees (matrix [][]int) {
	n := len(matrix)

	// step 1: Transpose (flip along diagonal)
	for r := 0; r < n; r++ {
		for c := r + 1; c < n; c++ {
			matrix[r][c], matrix[c][r] = matrix[c][r], matrix[r][c]
		}
	}

	// step 2: Reverse each row
	for r := 0; r < n; r ++ {
		left, right := 0, n-1
		for left < right {
			matrix[r][left], matrix[r][right] = matrix[r][right], matrix[r][left]
			left++
			right--
		}
	}
}
function findPeakGrid(mat: number[][]): number[] {
    let m = mat.length;
    let n = mat[0].length;

    let left = 0;
    let right = n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Find max row in this column
        let maxRow = 0;
        for (let i = 0; i < m; i++) {
            if (mat[i][mid] > mat[maxRow][mid]) {
                maxRow = i;
            }
        }

        let leftVal = mid - 1 >= 0 ? mat[maxRow][mid - 1] : -1;
        let rightVal = mid + 1 < n ? mat[maxRow][mid + 1] : -1;

        if (mat[maxRow][mid] > leftVal && mat[maxRow][mid] > rightVal) {
            return [maxRow, mid];
        } else if (mat[maxRow][mid] < rightVal) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return [-1, -1];
}
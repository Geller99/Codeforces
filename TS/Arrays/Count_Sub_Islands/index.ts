function countSubIslands(grid1: number[][], grid2: number[][]): number {
    const m = grid1.length;
    const n = grid1[0].length;

    function dfs(r: number, c: number): boolean {
        // out of bounds or water
        if (r < 0 || c < 0 || r >= m || c >= n || grid2[r][c] === 0) {
            return true;
        }

        // mark visited
        grid2[r][c] = 0;

        let isValid = true;

        // check current cell
        if (grid1[r][c] === 0) {
            isValid = false;
        }

        // explore neighbors
        const up = dfs(r - 1, c);
        const down = dfs(r + 1, c);
        const left = dfs(r, c - 1);
        const right = dfs(r, c + 1);

        return isValid && up && down && left && right;
    }

    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1) {
                if (dfs(i, j)) {
                    count++;
                }
            }
        }
    }

    return count;
}
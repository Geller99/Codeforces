function highestPeak(isWater: number[][]): number[][] {
    const m = isWater.length;
    const n = isWater[0].length;

    const height = Array.from({ length: m }, () => Array(n).fill(-1));
    const queue: [number, number][] = [];

    // Initialize queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    let head = 0;

    while (head < queue.length) {
        const [r, c] = queue[head++];

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 && nc >= 0 &&
                nr < m && nc < n &&
                height[nr][nc] === -1
            ) {
                height[nr][nc] = height[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    return height;
}
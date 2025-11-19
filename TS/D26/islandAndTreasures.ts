

type Grid = number[][];

const islandAndTreasure = (grid: Grid): Grid => {
    if(!grid || !grid.length) return [];

    const rows = grid.length;
    const cols = grid[0].length;
    let queue: [number, number, number][] = [];
    const directions: [number, number][] = [[-1, 0], [0, 1], [1, 0], [0, -1]] 

    // traverse entire grid and record treasures cells
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if(grid[row][col] === 0) {
                queue.push([row, col, 0])
            } 
        }
    }

    // If no treasure cells, return original grid
    if (queue.length === 0) return grid;

    while (queue.length > 0) {
        const [currRow, currCol, currDistance] = queue.shift()!;

        // Check all 4 directions
        for (const [dr, dc] of directions) {
            const newRow = currRow + dr;
            const newCol = currCol + dc;

            // Skip if out of bounds or water cell
            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || grid[newRow][newCol] === -1) {
                continue;
            }

            // process land cells
            if (grid[newRow][newCol] === Infinity) {
                // Update the cell with new distance
                grid[newRow][newCol] = currDistance + 1;
                queue.push([newRow, newCol, currDistance + 1]);
            }
        }
    }
    return grid;
}

const example = [
    [Infinity, -1, 0, Infinity],
    [Infinity, Infinity, Infinity, -1],
    [Infinity, -1, Infinity, -1],
    [0, -1, Infinity, Infinity]
]

console.log(islandAndTreasure(example));
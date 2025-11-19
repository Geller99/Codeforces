/**
 * 
 * Find all initially rotten oranges and store in queue at the same "level"
 * This lets us perform multi-source BFS and cover isolated fruit edge cases
 * Then we process all oranges at the current level
 * Rot the next set of oranges 
 */


const orangesRotting = (grid: number[][]): number => {
    if (!grid || !grid.length || !grid[0].length) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    
    // Validate rectangular grid
    for (let i = 0; i < rows; i++) {
        if (grid[i].length !== cols) {
            return -1; // Invalid grid
        }
    }
    
    let freshOranges = 0;
    let minutes = 0;
    const queue: [number, number][] = [];
    
    // Find all initially rotten oranges and count fresh ones
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshOranges++;
            }
        }
    }
    
    // If no fresh oranges, we're done
    if (freshOranges === 0) return 0;
    
    // If fresh oranges but no rotten ones, impossible
    if (queue.length === 0) return -1;
    
    // BFS with multi-source starting points
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    while (queue.length > 0 && freshOranges > 0) {
        const size = queue.length;
        
        // Process all oranges at current level (minute)
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift()!;
            
            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;
                
                if (
                    newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    grid[newRow][newCol] === 1
                ) {
                    // Rot the orange in place
                    grid[newRow][newCol] = 2;
                    queue.push([newRow, newCol]);
                    freshOranges--;
                }
            }
        }
        
        minutes++;
    }
    
    // If still have fresh oranges, impossible to rot all
    return freshOranges === 0 ? minutes : -1;
}
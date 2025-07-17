

type GraphMatrix = number[][];

const dfsRecursive = (grid: GraphMatrix): void => {
    if(!grid || !grid.length) return;

    const rows = grid.length;
    const cols = grid[0].length;
    const visited: boolean[][] = Array(rows).fill(0).map(() => Array(cols).fill(false));

    const directions = [[-1,0], [0,1], [1,0], [0, -1]];

    const dfs = (row: number, col: number) => {
        // boundary check and cell validity check for exploring neighbors 
        if(row < 0 || col < 0 || row >= rows || col >= cols || visited[row][col]) {
            return;
        }

        // mark cell visited 
        visited[row][col];

        /**
         * after I visit a cell, within the boundary and not previously marked visited...what do I do? 
         * 
         */
        // explore its neighbors in all 4 directions
        for(const [dr, dc] of directions) {
            dfs(row + dr, col + dc);
        }
    }
    

    // Main loop calling dfs  - where to start 
    for (let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if(!visited[row][col]) {
                dfs(row, col);
                // do something after each complete dfs traversal 
            }
        }
    }
}



const dfsIterative = (grid: GraphMatrix) => {
    if(!grid || !grid.length) return;

    const rows = grid.length;
    const cols = grid[0].length;
    const visited: boolean[][] = Array(rows).fill(0).map(()=> Array(cols).fill(false));
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];


    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if(!visited[row][col]) {
                const stack: [number, number][] = [[row, col]];

                while(stack.length > 0) {
                    const [currRow, currCol] = stack.pop()!;

                    // skip visited
                    if(visited[currCol][currRow]) continue;

                    // mark visited
                    visited[currRow][currCol] = true;

                    // processCell(currRow, currCol);

                    // add adjacent cells to stack
                    for(const [dr, dc] of directions) {
                        const newRow = currRow + dr;
                        const newCol =  currCol + dc;

                        if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !visited[newRow][newCol]) {
                            stack.push([newRow, newCol]);
                        }
                    }
                }
                // do something after complete traversal of a component
            }
        }
    }
}
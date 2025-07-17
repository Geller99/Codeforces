


// Matrix Traversal + DFS/BFS Pattern  
type GraphMatrix = number[][];

const numIslands = (graph: GraphMatrix): number => {
    if(!graph || !graph.length) return 0;
    
    const rows = graph.length;
    const cols = graph[0].length;
    let count = 0;

    // perform dfs from a land cell
    const dfs = (r: number, c: number): void => {
        // if any of these are true, it means we either exceeded the boundaries or are on a water cell, we return
        if(r < 0 || c < 0 || r >= rows || c >= cols || graph[r][c] === 0) {
            return;
        }

        // Mark visited
        graph[r][c] = 0;

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(graph[r][c] === 1){
                count++;  // found island
                dfs(r,c); // explore island neighbors
            }
        }
    }
    return count;
}


type GraphMatrix = number[][];

const maxAreaIsland = (graph: GraphMatrix) => {
    if(!graph || !graph.length) return 0;

    let rows = graph.length;
    let cols = graph[0].length;
    let maxCount = 0;

    // perform dfs from land cell
    const dfs = (r: number, c: number, count: number): number => {
        if(r < 0 || c < 0 || r >= rows || c >= cols || graph[r][c] === 0) return count;
        
        // mark visited
        graph[r][c] = 0;
        count++;
        
        // what am I trying to do here? visit neighbor nodes, at the end of each visit, we backtrack...has count increased?
        count = dfs(r + 1, c, count);
        count = dfs(r - 1, c, count);
        count = dfs(r, c + 1, count);
        count = dfs(r, c - 1, count);
        return count;
    }

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(graph[r][c] === 1){
                let islandCount = dfs(r, c, 0); // explore island neighbors
                maxCount = Math.max(maxCount, islandCount);
            }
        }
    }
}
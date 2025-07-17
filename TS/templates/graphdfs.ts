

type GraphMatrix = number[][];

const dfsRecursive = (matrix: graphMatrix, start: number) => {
    if(!matrix.length) return [];
    const numVertices = matrix.length;

    const visited: boolean[] = new Array(numVertices).fill(false);
    const result: number[] = [];

    const dfs = (vertex: number) => {
        visited[vertex] = true;     // mark vertex as visited
        result.push(vertex);        // add to result array

        for(let i = 0; i < numVertices; i++) {
            if(matrix[vertex][i] === 1 && !visited[i]){
                dfs(i);
            }
        }
    }

    dfs(start);
    return result;
}

const dfsIterative = (matrix: graphMatrix, start: number) => {
    const numVertices = matrix.length;
    const visited: boolean[] = new Array(numVertices).fill(false);
    const result: number[] = [];
    const stack: number[] = [start];

    while(stack.length > 0) {
        const vertex = stack.pop()!; // current vertex

        // skip if already visited
        if(visited[vertex]) continue; 

        // mark visited if not
        visited[vertex] = true;
        result.push(vertex);

        for(let i = numVertices - 1; i >= 0; i--){
            if(matrix[vertex][i] === 1 && !visited[i]) {
                stack.push(i);
            }
        }
    }

    return result;
}


const graph: graphMatrix = [
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

console.log("DFS iterative", dfsIterative(graph, 0));
console.log("DFS recursive", dfsRecursive(graph, 0));
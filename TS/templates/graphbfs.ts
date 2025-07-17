

type GraphMatrix = number[][];


const bfs = (matrix: GraphMatrix, start: number) => {
    if(!matrix.length) return [];

    const numVertices = matrix.length;
    const visited: boolean[] = new Array(numVertices).fill(false);
    const result: number[] = [];
    const queue: number[] = [start];


    visited[start] = true;

    while(queue.length > 0) {
        const vertex = queue.shift()!;

        result.push(vertex);

        for(let i = 0; i < numVertices; i++) {
            if(matrix[vertex][i] === 1 && !visited[i]) {
                visited[i] = true;
                queue.push(i);
            }
        }
    }
    return result;
}

const graph: GraphMatrix = [
    [0, 1, 1, 0, 0], // 0 connects to 1 and 2
    [0, 0, 0, 1, 0], // 1 connects to 3
    [0, 0, 0, 1, 1], // 2 connects to 3 and 4
    [0, 0, 0, 0, 0], // 3 has no connections
    [0, 0, 0, 0, 0]  // 4 has no connections
];

console.log("BFS", bfsIterative(graph, 0));



interface Edge {
    to: number;
    weight: number;
}


class WeightedDigraphList {
    private adjacencyList: Edge[][];

    constructor(n:number) {
        this.adjacencyList = Array.from({length: n}, () => []);
    }

    addEdge(from:number, to:number, weight:number):void {
        this.adjacencyList[from].push({to, weight});
    }

    removeEdge(from: number, to:number):void {
        this.adjacencyList[from] = this.adjacencyList[from].filter(e => e.to !== to);
    }

    hasEdge(from:number, to:number): boolean {
        return this.adjacencyList[from].some(e => e.to === to);
    }

    weight(from:number, to:number):number {
        const edge = this.adjacencyList[from].find(e => e.to === to);
        if(edge === undefined) {
            throw new Error(`No edge exists ${from} to vertex ${to}`);
        }
        return edge.weight;
    }

    neighbors(v: number):Edge[] {
        return this.adjacencyList[v];
    }
}

class WeightedDigraphMatrix {
    // Adjacency matrix: matrix[i][j] represents the weight of edge from i to j
    // null means no edge exists
    private adjacencyMatrix: (number | null)[][];
    private vertices: number;
  
 
    constructor(n: number) {
      this.vertices = n;
      this.adjacencyMatrix = Array.from({ length: n }, () => 
        Array.from({ length: n }, () => null)
      );
    }
  
    addEdge(from: number, to: number, weight: number): void {
      if (from < 0 || from >= this.vertices || to < 0 || to >= this.vertices) {
        throw new Error(`Vertex index out of bounds`);
      }
      this.adjacencyMatrix[from][to] = weight;
    }

    removeEdge(from: number, to: number): void {
      if (from < 0 || from >= this.vertices || to < 0 || to >= this.vertices) {
        throw new Error(`Vertex index out of bounds`);
      }
      this.adjacencyMatrix[from][to] = null;
    }
  
    hasEdge(from: number, to: number): boolean {
      if (from < 0 || from >= this.vertices || to < 0 || to >= this.vertices) {
        throw new Error(`Vertex index out of bounds`);
      }
      return this.adjacencyMatrix[from][to] !== null;
    }
  
    weight(from: number, to: number): number {
      if (from < 0 || from >= this.vertices || to < 0 || to >= this.vertices) {
        throw new Error(`Vertex index out of bounds`);
      }
      const weight = this.adjacencyMatrix[from][to];
      if (weight === null) {
        throw new Error(`No edge exists from vertex ${from} to vertex ${to}`);
      }
      return weight;
    }

    neighbors(v: number): Array<{ to: number; weight: number }> {
      if (v < 0 || v >= this.vertices) {
        throw new Error(`Vertex index out of bounds`);
      }
      const neighbors: Array<{ to: number; weight: number }> = [];
      for (let i = 0; i < this.vertices; i++) {
        const weight = this.adjacencyMatrix[v][i];
        if (weight !== null) {
          neighbors.push({ to: i, weight });
        }
      }
      return neighbors;
    }
  }

  const graph = new WeightedDigraphMatrix(3);
graph.addEdge(0, 1, 1);
graph.addEdge(1, 2, 2);
graph.addEdge(2, 0, 3);
graph.addEdge(2, 1, 4);

console.log(graph.hasEdge(0, 1)); // true
console.log(graph.hasEdge(1, 0)); // false

graph.neighbors(2).forEach(edge => {
  console.log(`${2} -> ${edge.to}, weight: ${edge.weight}`);
});
// 2 -> 0, weight: 3
// 2 -> 1, weight: 4

graph.removeEdge(0, 1);
console.log(graph.hasEdge(0, 1)); // false
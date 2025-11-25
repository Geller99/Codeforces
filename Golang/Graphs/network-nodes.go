import (
    "container/heap"
    "math"
)

type Edge struct {
    node int
    cost int
}

type MinHeap []Edge

func (h MinHeap) Len() int            { return len(h) }
func (h MinHeap) Less(i, j int) bool  { return h[i].cost < h[j].cost }
func (h MinHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *MinHeap) Push(x interface{}) { *h = append(*h, x.(Edge)) }
func (h *MinHeap) Pop() interface{} {
    old := *h
    n := len(old)
    item := old[n-1]
    *h = old[:n-1]
    return item
}

func networkDelayTime(times [][]int, n int, k int) int {
    graph := make([][]Edge, n+1)
    for _, t := range times {
        graph[t[0]] = append(graph[t[0]], Edge{node: t[1], cost: t[2]})
    }

    dist := make([]int, n+1)
    for i := 1; i <= n; i++ {
        dist[i] = math.MaxInt
    }
    dist[k] = 0

    pq := &MinHeap{{k, 0}}
    heap.Init(pq)

    for pq.Len() > 0 {
        edge := heap.Pop(pq).(Edge)
        node, d := edge.node, edge.cost

        if d > dist[node] {
            continue
        }

        for _, nxt := range graph[node] {
            if dist[node]+nxt.cost < dist[nxt.node] {
                dist[nxt.node] = dist[node] + nxt.cost
                heap.Push(pq, Edge{nxt.node, dist[nxt.node]})
            }
        }
    }

    answer := 0
    for i := 1; i <= n; i++ {
        if dist[i] == math.MaxInt {
            return -1
        }
        if dist[i] > answer {
            answer = dist[i]
        }
    }

    return answer
}

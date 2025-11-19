// Definition for a Node.
type Node struct {
    Val       int
    Neighbors []*Node
}

func cloneGraph(node *Node) *Node {
    if node == nil {
        return nil
    }

    visited := make(map[*Node]*Node)

    var dfs func(*Node) *Node
    dfs = func(n *Node) *Node {
        if n == nil {
            return nil
        }

        // if already cloned, return it
        if cloned, ok := visited[n]; ok {
            return cloned
        }

        // create clone node
        clone := &Node{Val: n.Val}
        visited[n] = clone

        // recursively clone neighbors
        for _, neighbor := range n.Neighbors {
            clone.Neighbors = append(clone.Neighbors, dfs(neighbor))
        }

        return clone
    }

    return dfs(node)
}

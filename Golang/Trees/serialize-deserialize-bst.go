import (
    "strconv"
    "strings"
)

type Codec struct{}

// Constructor for Codec
func Constructor() Codec {
    return Codec{}
}

// Serialize BST -> string
func (c *Codec) serialize(root *TreeNode) string {
    vals := []string{}
    var preorder func(*TreeNode)
    preorder = func(node *TreeNode) {
        if node == nil {
            return
        }
        vals = append(vals, strconv.Itoa(node.Val))
        preorder(node.Left)
        preorder(node.Right)
    }
    preorder(root)
    return strings.Join(vals, ",")
}

// Deserialize string -> BST
func (c *Codec) deserialize(data string) *TreeNode {
    if data == "" {
        return nil
    }

    parts := strings.Split(data, ",")
    nums := []int{}
    for _, p := range parts {
        n, _ := strconv.Atoi(p)
        nums = append(nums, n)
    }

    // helper with bounds
    var build func(min, max int) *TreeNode
    idx := 0
    build = func(min, max int) *TreeNode {
        if idx >= len(nums) {
            return nil
        }
        val := nums[idx]
        if val < min || val > max {
            return nil
        }
        idx++
        node := &TreeNode{Val: val}
        node.Left = build(min, val-1)
        node.Right = build(val+1, max)
        return node
    }

    return build(-1<<31, 1<<31-1) // full int range
}

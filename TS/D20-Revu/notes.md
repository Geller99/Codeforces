## Review Day -> Trees

## What are all our known traversals

- Depth first search -> inorder, preorder, postorder
- Breadth first search -> level-order, zig-zag, 
- Boundary Traversal 
- Left boundary traversal
- Right boundary traversal 


## Thinking Pattern
The thinking pattern for solving binary tree problems falls into two categories:

1. Can the answer be obtained by traversing the binary tree? If so, use a traverse function along with external variables, known as the "traversal" mindset.

2. Can a recursive function be defined to derive the solution from subproblems (subtrees)? If so, write this recursive function, leveraging its return values, known as the "problem decomposition" mindset.

Regardless of the approach, consider:

What does a single binary tree node need to do? When should it act (pre/in/post-order position)? The recursive function will handle the rest, ensuring consistent operations across all nodes.


## Key Questions

- Invert Binary Tree: at each node, create temp and swap left and right children (D13)
- Maximum Depth: traverse using level-order, increment depth at each level (D13)
- Diameter of Binary Tree: DFS post order traversal, each node we compare the left and right diameter with its path through the current node (leftTree height + rightTreeHeight)
- Balanced Binary Tree: at each node, get the height of each subtree, then check if their difference is more than 1
- Same Tree: iterate both roots, check if left and right subtrees are the same or differ, return accordingly ~~ OR dfs both nodes, push each node into a list and compare both lists at the end 
- SubTree of another tree: at each node, check if the trees match, if not, recursively check each child node - use sameTree as helper.
- Lowest common Ancestor: if both nodes are in one subtree the LCA is there, if one node is a parent of another, it is the LCA, if both nodes are in separate subtrees, their LCA is the parent of both subtrees
- Level Order Traversal: traverse levels by dequeuing a node and adding child nodes to the end of a queue
- Binary Tree Right Side View: BFS, grab the last value in the "level" array each time 
- Count good nodes: 



Key Patterns 
- Traverse
- Path sum/ Longest path
- Counting nodes 
- Boundary Traversal 
- Traversal with global values 
- Level-order tricks 
- Node swap, recursive traversal 
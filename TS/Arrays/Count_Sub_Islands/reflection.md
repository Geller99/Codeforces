## Count Sub Islands

### Pattern
DFS / Flood Fill + Validation

---

### Core Insight
Traverse each island in grid2 and ensure all its cells exist in grid1.

---

### Key Idea
If any cell in the island is invalid, the whole island is invalid.

---

### What I Learned
- DFS can return boolean to validate structure
- Combine traversal with condition checking
- Grid problems often use flood fill

---

### Complexity
- Time: O(m * n)
- Space: O(m * n)
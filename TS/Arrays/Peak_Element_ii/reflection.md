## Find a Peak Element II

### Pattern
Binary Search on 2D Grid

---

### Core Insight
Use binary search on columns and find the maximum element in each column to determine direction.

---

### Key Idea
Compare the column maximum with its left and right neighbors to decide movement.

---

### What I Learned
- Extend 1D binary search into 2D
- Reduce 2D problem into repeated 1D decisions
- Use structure instead of brute force

---

### Complexity
- Time: O(m log n)
- Space: O(1)
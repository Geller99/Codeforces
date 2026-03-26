## Find Peak Element

### Pattern
Binary Search on slope

---

### Core Insight
Compare nums[mid] with nums[mid+1] to determine which side contains a peak.

---

### What I Missed Initially
- Incorrect peak condition (only checked one side)
- Improper boundary handling
- Tried to patch edge cases with undefined

---

### Key Invariant
If nums[mid] < nums[mid+1], peak is on the right; otherwise, it is on the left.

---

### Time & Space Complexity
- O(n) (my approach)
- O(log n) (optimal)
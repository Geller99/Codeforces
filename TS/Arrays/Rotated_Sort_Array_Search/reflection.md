## Search in Rotated Sorted Array

**LeetCode Link:** https://leetcode.com/problems/search-in-rotated-sorted-array/

### Pattern
Modified Binary Search

---

### Core Insight (1 sentence)
Even though the array is rotated, at least one half is always sorted, which allows binary search to continue.

---

### What I Missed Initially
- Treated the array as fully sorted
- Didn’t recognize that one half is always ordered
- Didn’t use the sorted half to eliminate search space

---

### Key Invariant
At every step:
- Either the left half or the right half is sorted
- Use that to decide where the target can exist

---

### Recognition Signal
If a sorted array is rotated and O(log n) is required, use modified binary search and check which half is sorted.

---

### Interview Red Flags
- Falling back to linear search (O(n))
- Not checking which half is sorted
- Incorrect boundary comparisons

---

### If I Saw This Again, I Would
- Use binary search structure
- Identify sorted half each iteration
- Narrow search space based on target range

---

### Time & Space Complexity
- **Time:** O(log n)
- **Space:** O(1)

---

### Confidence Level (1–5)
5
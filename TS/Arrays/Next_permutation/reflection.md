## Next Permutation

**LeetCode Link:** https://leetcode.com/problems/next-permutation/

### Pattern
Array manipulation + Greedy

---

### Core Insight (1 sentence)
Find the first decreasing point from the right, swap with the next larger element, then reverse the suffix to get the smallest larger permutation.

---

### What I Missed Initially
- Tried brute force (generate all permutations)
- Didn’t realize this is an in-place transformation problem
- Didn’t understand lexicographical ordering mechanics

---

### Key Invariant
The suffix after the pivot is always in descending order and must be reversed after swapping.

---

### Recognition Signal
Problems involving “next lexicographical arrangement” usually require identifying a pivot and reversing a suffix.

---

### Interview Red Flags
- Attempting brute force permutations
- Not recognizing descending suffix pattern
- Forgetting to reverse after swap

---

### If I Saw This Again, I Would
- Scan from right to find pivot
- Swap with next larger number
- Reverse suffix

---

### Time & Space Complexity
- **Time:** O(n)
- **Space:** O(1)

---

### Confidence Level (1–5)
1
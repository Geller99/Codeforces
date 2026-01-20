## 3Sum Closest

**LeetCode Link:** https://leetcode.com/problems/3sum-closest/

### Pattern
Sort + Two Pointers

---

### Core Insight (1 sentence)
This problem requires minimizing the absolute difference between the target and all possible triplet sums, not finding an exact or near-exact match early.

---

### What I Missed Initially
- Treated the problem like 3Sum and tried to return early.
- Used fixed thresholds (±1) instead of tracking the global closest sum.
- Moved both pointers at the same time, which skipped valid candidates.
- Added duplicate-handling logic even though uniqueness is not required.

---

### Key Invariant
Because the array is sorted:
- Moving `left` right increases the sum.
- Moving `right` left decreases the sum.
Pointer movement must be determined by comparing the current sum to the target.

---

### Recognition Signal
When asked for a value “closest” to a target using fixed-size combinations, maintain a global best result using absolute difference.

---

### Interview Red Flags
- Returning early without scanning all viable combinations.
- Comparing raw values instead of absolute differences.
- Treating an optimization problem as an equality problem.

---

### If I Saw This Again, I Would
- Initialize the closest sum immediately.
- Update the closest sum on every iteration.
- Move only one pointer at a time based on the sum comparison.

---

### Time & Space Complexity
- **Time:** O(n²)
- **Space:** O(1)

---

### Confidence Level (1–5)
2

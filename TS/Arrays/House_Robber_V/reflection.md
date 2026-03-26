## House Robber V

**Pattern:** Dynamic Programming

---

### Core Insight
At each house, decide to rob or skip based on color conflict with previous house.

---

### What I Missed Initially
- Tried greedy approach
- Didn’t track previous decisions
- Didn’t recognize DP structure

---

### State Definition
dp[i] = max money up to house i

---

### Transition
- If same color → cannot take both
- If different → can accumulate

---

### Complexity
- Time: O(n)
- Space: O(n)

---

### Confidence Level
3
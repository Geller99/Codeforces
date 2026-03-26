## Map of Highest Peak

### Pattern
Multi-source BFS

---

### Core Insight
Treat all water cells as starting points and expand outward assigning increasing heights.

---

### Key Idea
Each BFS layer represents distance from nearest water.

---

### What I Learned
- BFS is ideal for shortest distance problems
- Multiple starting points can be queued initially
- Grid problems often reduce to traversal patterns

---

### Complexity
- Time: O(m * n)
- Space: O(m * n)

### Performance Issue
Using queue.shift() caused O(n²) behavior due to array shifting.

---

### Fix
Use pointer (head index) instead of shift for O(1) dequeue.

---

### Lesson
In JS, always avoid shift() in BFS problems.
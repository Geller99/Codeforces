### Think:

```Fix first number (i)
  Fix second number (j)
    Solve 2Sum using left/right pointers
```
### So:

4 numbers → 2 loops + 2 pointers

### Step-by-step solution (clear and structured)
# Step 1: Sort
```nums.sort((a, b) => a - b);```
# Step 2: First loop (fix first number)
```for (let i = 0; i < nums.length - 3; i++)```

Skip duplicates:

```if (i > 0 && nums[i] === nums[i - 1]) continue;```
# Step 3: Second loop (fix second number)
``` for (let j = i + 1; j < nums.length - 2; j++) ```

Skip duplicates:

if (j > i + 1 && nums[j] === nums[j - 1]) continue;

# Step 4: Two pointers (like 3Sum)
```let left = j + 1;
let right = nums.length - 1;
```
# Step 5: Evaluate sum
```const sum = nums[i] + nums[j] + nums[left] + nums[right];```
# Step 6: Move pointers
``` 
sum === target → save result + skip duplicates
sum < target → move left
sum > target → move right
```
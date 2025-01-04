# Pattern: Hash map/set

## Problem
Contains Duplicate


## Questions/Insights
- What happens if we have say -1 and 1? do we want to evaluate every value as an absolute value?
- What happens if the array is empty?
- What happens if we have multiple sets of duplicates?
- What happens if all values are the same? 


## Test/Edge Cases

```test('should return true for array with duplicates', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });

test('should return false for an array without duplicates', () => {
        expect(containsDuplicate([1, 2, 3,])).toBe(false);
    });

test('should return false for array with length zero or one', () => {
        expect(containsDuplicate([1])).toBe(false);
    });

test('should return true for array with negative duplicates', () => {
        expect(containsDuplicate([-1, 2, 3, -1])).toBe(true);
    });

```

## Time & Space Complexity
- Time: O(n)
- Space: O(n)



## Alternative Solutions
```
function containsDuplicate(nums: number[]): boolean {
    const setNums = new Set(nums);
    return nums.length !== setNums.size;
};

```

Essentially, input everything in nums into a set...check if the set has the same size as the original array...neat!
# Pattern: Price tracking, Two pointer, DP, 

## Problem
Best time to buy and sell stock


## Questions/Insights
- Can profit be negative? no
- What happens if the stock prices are continually decreasing? return 0, no profit
- What happens if the array of prices is empty or only contains one price? return 0

## Test/Edge Cases

```test('should return 5 for normal price increase', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(5);
});

test('should return 0 when prices only decrease', () => {
    expect(maxProfit([7,6,4,3,1])).toBe(0);
});

test('should return 0 for empty array or single day', () => {
    expect(maxProfit([])).toBe(0);
    expect(maxProfit([1])).toBe(0);
});

test('should handle array with same prices', () => {
    expect(maxProfit([1,1,1,1])).toBe(0);
});

test('should find maximum profit in fluctuating market', () => {
    expect(maxProfit([3,2,6,5,0,3])).toBe(4);
});
```

## Time & Space Complexity
- Time: O(n)
- Space: O(1)



## Alternative Solutions

Minimum Price Tracking
```
const maxProfit = (prices: number[]): number => {
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for(let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
}


Two Pointer Approach
const maxProfit = (prices: number[]): number => {
    let left = 0;  // buy pointer
    let right = 1; // sell pointer
    let maxProfit = 0;
    
    while(right < prices.length) {
        if(prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
        } else {
            left = right;
        }
        right++;
    }
    return maxProfit;
}

Kadane's algorithm Approach
function maxProfit(prices: number[]): number {
    let currDiff = 0;
    let maxDiff = 0;
    
    for(let i = 1; i < prices.length; i++) {
        currDiff = Math.max(0, currDiff + prices[i] - prices[i-1]);
        maxDiff = Math.max(maxDiff, currDiff);
    }
    return maxDiff;
}

```


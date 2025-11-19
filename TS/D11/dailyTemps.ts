
const dailyTemperatures = (nums: number[]) => {
    const n = nums.length;
    const result = new Array(n).fill(0);
    const stack: number[] = [];


    for(let i = 0; i < n; i++) {

      while(stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
        const prevIndex = stack.pop()!;
        result[prevIndex] = i -  prevIndex;
      }
      stack.push(i);
    }
    return result;
} 

// Let's test with the example: [30,38,30,36,35,40,28]
const temps = [30,38,30,36,35,40,28];
console.log(dailyTemperatures(temps));

/* Detailed step-by-step walkthrough:

Step 1: i = 0, temperature = 30
- Stack is empty
- Push 0 onto stack
- Stack: [0]
- Result: [0,0,0,0,0,0,0]

Step 2: i = 1, temperature = 38
- Stack has 0
- Check if 38 > temperatures[0] (30)? Yes
  - Pop 0 from stack
  - result[0] = 1 - 0 = 1
- Push 1 onto stack
- Stack: [1]
- Result: [1,0,0,0,0,0,0]

Step 3: i = 2, temperature = 30
- Stack has 1
- Check if 30 > temperatures[1] (38)? No
- Push 2 onto stack
- Stack: [1,2]
- Result: [1,0,0,0,0,0,0]

Step 4: i = 3, temperature = 36
- Stack has [1,2]
- Check if 36 > temperatures[2] (30)? Yes
  - Pop 2 from stack
  - result[2] = 3 - 2 = 1
- Check if 36 > temperatures[1] (38)? No
- Push 3 onto stack
- Stack: [1,3]
- Result: [1,0,1,0,0,0,0]

Step 5: i = 4, temperature = 35
- Stack has [1,3]
- Check if 35 > temperatures[3] (36)? No
- Push 4 onto stack
- Stack: [1,3,4]
- Result: [1,0,1,0,0,0,0]

Step 6: i = 5, temperature = 40
- Stack has [1,3,4]
- Check if 40 > temperatures[4] (35)? Yes
  - Pop 4 from stack
  - result[4] = 5 - 4 = 1
- Check if 40 > temperatures[3] (36)? Yes
  - Pop 3 from stack
  - result[3] = 5 - 3 = 2
- Check if 40 > temperatures[1] (38)? Yes
  - Pop 1 from stack
  - result[1] = 5 - 1 = 4
- Push 5 onto stack
- Stack: [5]
- Result: [1,4,1,2,1,0,0]

Step 7: i = 6, temperature = 28
- Stack has [5]
- Check if 28 > temperatures[5] (40)? No
- Push 6 onto stack
- Stack: [5,6]
- Final Result: [1,4,1,2,1,0,0]

The key insight is that the stack maintains indices of temperatures that are still waiting 
to find a warmer day. When we find a warmer temperature, we can update all the previous 
temperatures that were waiting by calculating the day difference.
*/
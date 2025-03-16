

// List framework - stack for iteration

// Recursive approach  - tree framework, backtracking x DP
const generateParentheses = (n: number) => {
   
    const result:string[] = [];

    const dfs = (open:number, close:number, current: string) => {
        if(current.length === 2*n) {
            result.push(current);
            return;
        }

        // Rules for incrementing parentheses
        if(open < n) {
            dfs(open + 1, close, current + "(");
        }
        if(close < open) {
            dfs(open, close + 1, current + "(");
        }
    }

    // starting point
    dfs(0,0, "");
    return result;
}


//  Stack approach
const generateParenthesesStack = (n: number) => {

    const result: string[] = [];

    // stack handles state updates
    const stack: [number, number, string][] = [[0,0, ""]];


    while (stack.length > 0) {

        const [open, close, current] = stack.pop()!;

        if(current.length === 2 * n) {
            result.push(current);
            continue;
        }

        if(close < open) {
            stack.push([open, close + 1, current + ")"]);
        }

        if(open < n) {
            stack.push([open + 1, close, current + "("])
        }
    }
}
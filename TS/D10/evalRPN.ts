
// List Framework -> stack sequential storage

const evalRPN = (tokens: string[]): number => {
    const stack: number[] = [];
    
    for (const token of tokens) {
        // If token is an operator
        if (['+', '-', '*', '/'].includes(token)) {
            const b = stack.pop()!;  // Second operand
            const a = stack.pop()!;  // First operand
            
            // Perform operation and push result back
            switch(token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(Math.trunc(a / b)); break;
            }
        } else {
            // If token is a number, push to stack
            stack.push(Number(token));
        }
    }
    
    return stack[0]; // Final result
}
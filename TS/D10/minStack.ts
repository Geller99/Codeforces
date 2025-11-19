

class MinStack <T> {

    private stack: T[];
    private minStack: T[];

    constructor () {
        this.stack = [];
        this.minStack = [];
    }

    push(val: T):void {
        this.stack.push(val);
        if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    getMin(): T {
        return this.minStack[this.minStack.length - 1];
    }

    peekTop(): T {
        return this.stack[this.stack.length - 1];
    }

    pop(): T | undefined {
        if(this.stack.length === 0) {
            return undefined
        }
        const val = this.stack.pop();
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return val
    }

}
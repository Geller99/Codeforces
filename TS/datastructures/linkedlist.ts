
/**
 * basic implementation of a singly linked list
 */

// A "node" class with properties value and next
class ListNode<T> {
    value: T;
    next: ListNode<T> | null

    constructor(value:T) {
        this.value = value;
        this.next = null;
    }
}

// next we create a class to manage nodes
class LinkedList<T> {
    private head: ListNode<T> | null;
    private tail: ListNode<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;  // empty list on instantiation
    }

    // add to the end of list
    append(value: T):void {
        const newNode = new ListNode(value)

        this.size++; // increment size
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail!.next = newNode;
        this.tail = newNode;
    }

    // add to the beginning of list
    prepend(value: T):void {
        const newNode =  new ListNode(value);

        if(!this.head) {
            throw new Error("Cannot prepend non-existent list");
        }
        newNode.next = this.head;
        this.head = newNode;
        return;
    }

    delete(value: T):boolean {
        if(!this.head) return false;

        if(this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            if(this.size === 0){
                this.tail = null;
            }
            return true;
        }

        let current = this.head;
        while(current.next) {
            if(current.next.value === value){
                // update pointers to skip current node
                current.next = current.next.next;
                this.size--;
                
                if(current.next === null) {
                    this.tail = current;
                }
                return true;
            }

            current = current.next;
        }
        return false;
    }

    getSize():number {
        return this.getSize();
    }

    



}

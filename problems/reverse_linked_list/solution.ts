/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    interface IStack<T> {
        push(item: T): void;
        pop(): T | undefined;
        peek(): T | undefined;
        size(): number;
    }
    class Stack<T> implements IStack<T> {
        private storage: T[] = [];

        constructor(private capacity: number = Infinity) {}

        push(item: T): void {
            if (this.size() === this.capacity) {
                // this is just from common error issues list.
                throw Error("Stack has reached max capacity, you cannot add more items");
            }
            this.storage.push(item);
        }

        pop(): T | undefined {
            return this.storage.pop();
        }

        peek(): T | undefined {
            return this.storage[this.size() - 1];
        }

        size(): number {
            return this.storage.length;
        }
    }

    let node : ListNode, workerNode: ListNode | null;
    const stack = new Stack<ListNode>();

    while(head) {
        workerNode = head;
        head = head.next;
        workerNode.next = null;
        stack.push(workerNode);
    }
    let len = stack.size();
    if(len) node = stack.pop(); else return null;
    let lastNode = node

    while(stack.size()) {
        lastNode.next = stack.pop();
        lastNode = lastNode.next;
    }
    return node;
};

function reverseList2(head: ListNode | null): ListNode | null {
    let node : ListNode;
    let array = []
    while(head) {
        array.push(head.val);
        head = head.next;
    }
    let len = array.length;
    if(len) node = new ListNode(array[0], null); else return null;
    let lastNode = node

    for(let i = len - 1; i > -1; --i) {
        lastNode.next = new ListNode(array[i], null);
        lastNode = lastNode.next;
    }
    return node.next;
};
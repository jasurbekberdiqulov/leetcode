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

function getDecimalValue(head: ListNode | null): number {
    let counter = 0, sum = 0;
    let node = head;
    while(node) {
        ++counter;
        node = node.next;
    }
    node = head;
    while(node) {
        sum += node.val * Math.pow(2, --counter);
        node = node.next;
    }
    return sum;
};
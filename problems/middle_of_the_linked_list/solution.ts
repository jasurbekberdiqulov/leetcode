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

function middleNode(head: ListNode | null): ListNode | null {
    let node = head;
    let counter = 0;
    while(node) {
        node = node.next;
        counter ++;
    }

    counter = (counter % 2)? counter / 2 - 0.5 : counter / 2;
    node = head;
    while(counter --) {
        node = node.next;
    }
    return node;
};
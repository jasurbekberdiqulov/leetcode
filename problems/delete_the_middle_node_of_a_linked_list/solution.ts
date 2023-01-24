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

function deleteMiddle(head: ListNode | null): ListNode | null {
    let node = head, counter = 0;
    const getLast = (node: ListNode): ListNode => {
        counter ++;
        return (node.next)? getLast(node.next) : node;
    }
    getLast(node);
    if(counter == 1) return null;

    counter = (counter % 2) ? counter / 2 - 0.5 : counter / 2;
    node = head;

    while(--counter) {
        node = node.next;
    }
    if(node) node.next = node.next?.next;

    return head;
};
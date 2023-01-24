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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let node = head, prevNode = head;

    while(node) {
        if(node.val == val) {
            prevNode.next = node.next;
        } else {
            prevNode = node;
        }
        node = node.next;
    }

    return (head?.val != val)? head : head.next;
};
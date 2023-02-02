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

function detectCycle(head: ListNode | null): ListNode | null {
    const listMap = new Set<ListNode>();
    while(head) {
        if(listMap.has(head)) return head;
        listMap.add(head)
        head = head.next;
    }
    return null;
};
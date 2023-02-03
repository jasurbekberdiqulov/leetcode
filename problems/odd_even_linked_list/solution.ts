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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let s = head;
    if (!head.next.next) {
        head = head.next;
        s.next = head;
        return s;
    }
    let odd = head; //odd
    let even = head.next; //even
    head = even;
    while (odd?.next) {
        odd.next = head.next;
        if (odd.next == null) break;
        odd = odd.next;
        if (odd) {
            head.next = odd?.next;
            head = head?.next;
        }
    }
    odd.next = even;
    return s;
};
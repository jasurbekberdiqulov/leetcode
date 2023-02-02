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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head == null) return null;
    let node = head;
    let counter = 0;
    while (node) {
        ++counter;
        node = node.next;
    }
    node = head;
    const l = k % counter;
    if (l) {
        counter -= l;
        for (let i = 1; i < counter; ++i) {
            node = node.next;
        }
        if (counter > 0) {
            const _node = node.next;
            node.next = null;
            let temp = _node;
            while(temp.next) {
                temp = temp.next;
            }
            temp.next = head;
            head = _node;
        }
    }
    return head;
};
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let count = 0;
    const enumerateList = (node: ListNode): ListNode => {
        ++count;
        return node.next ? enumerateList(node.next) : node;
    }
    enumerateList(head);
    let nPos = count - n - 1;

    if(nPos < -1 && count < 1) return null;

    let node = head;
    count = 0;
    let isFound = false;
    while(node) {
        if(count == nPos) {
            node.next = node.next?.next;
            isFound = true;
        } else {
            node = node.next;
        }
        count ++;
    }
    return isFound? head : head.next;
};
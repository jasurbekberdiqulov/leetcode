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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let node = headA;
    let n1 = 0, n2 = 0;
    while(node) {
        ++n1;
        node = node.next;
    }
    node = headB;
    while(node) {
        ++n2;
        node = node.next;
    }
    let nodeX: ListNode;
    if(n1 > n2) {
        node = headA;
        nodeX = headB;
        for(let i = n2; i < n1; ++i) node = node.next;
    } else {
        node = headB;
        nodeX = headA;
        for(let i = n1; i < n2; ++i) node = node.next;
    }

    while(nodeX) {
        if(nodeX == node) return node;
        node = node.next;
        nodeX = nodeX.next;
    }
    return null;
};
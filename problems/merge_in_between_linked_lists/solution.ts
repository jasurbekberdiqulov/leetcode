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

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let bridgeNodeA = list1;
    let edgeBegin: ListNode, edgeEnd: ListNode;

    for(let i = 0; i <= b; ++i) {
        if(i + 1 == a) edgeBegin = bridgeNodeA;
        bridgeNodeA = bridgeNodeA.next;
    }

    edgeBegin.next = list2;
    edgeEnd = bridgeNodeA;

    const getLast = (node: ListNode) : ListNode => {
        return node.next ? getLast(node.next) : node;
    }
    let bridgeNodeB = getLast(list2);
    bridgeNodeB.next = edgeEnd;

    return list1;
};
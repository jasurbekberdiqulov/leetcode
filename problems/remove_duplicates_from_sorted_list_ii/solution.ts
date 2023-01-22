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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let node = head, lastNonEqualNode: ListNode | null, hasEquality = false;
    while(node) {
        if(node.val == node.next?.val) {
            node.next = node.next?.next;
            hasEquality = true;
        } else {
            if(hasEquality) {
                if(node.val == head.val) {
                    head = node.next;
                } else {
                    // get last non equal node
                    lastNonEqualNode.next = node.next;
                    // need to continue from where last non equal node has been stopped
                    node = lastNonEqualNode;
                }
                hasEquality = false;
            } else {
                lastNonEqualNode = node;
                node = node.next;
            }
        }
    }
    return head;
};
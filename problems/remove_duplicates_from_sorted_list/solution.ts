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
    let trashNode = head;
    while(trashNode) {
        if(trashNode?.val == trashNode?.next?.val) {
            trashNode.next = trashNode?.next?.next;
        } else {
            trashNode = trashNode.next;
        }
    }
    return head;
};
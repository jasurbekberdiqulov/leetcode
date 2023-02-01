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

function reverseList(head: ListNode | null): ListNode | null {
    let node : ListNode;
    let array = []
    while(head) {
        array.push(head.val);
        head = head.next;
    }
    let len = array.length;
    if(len) node = new ListNode(array[0], null); else return null;
    let lastNode = node

    for(let i = len - 1; i > -1; --i) {
        lastNode.next = new ListNode(array[i], null);
        lastNode = lastNode.next;
    }
    return node.next;
};
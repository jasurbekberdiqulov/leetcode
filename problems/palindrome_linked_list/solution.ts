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

function isPalindrome(head: ListNode | null): boolean {
    const obj = [];
    while(head) {
        obj.push(head.val);
        head = head.next;
    }
    const objLen = obj.length;
    const len = objLen/2 - (objLen % 2)/2;
    for(let i = 0; i < len; ++i) {
        if(obj[i] != obj[objLen - i - 1]) return false;
    }
    return true;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
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
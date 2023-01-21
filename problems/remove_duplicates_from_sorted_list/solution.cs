/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode DeleteDuplicates(ListNode head) {
        ListNode trashNode = head;
        while(trashNode != null) {
            if(trashNode?.val == trashNode?.next?.val) {
                trashNode.next = trashNode?.next?.next;
            } else {
                trashNode = trashNode.next;
            }
        }
        return head;
    }
}
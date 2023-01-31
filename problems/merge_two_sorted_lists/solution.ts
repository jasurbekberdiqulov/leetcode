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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let mergedList: ListNode | null = null;

    if (!list1) return list2;
    if (!list2) return list1;
    if (!list2 || !list2) return null;

    let temp: ListNode, kill: ListNode;
    while (list1 || list2) {
        if(!list1) {
            temp.next = list2;
            break;
        }
        if(!list2) {
            temp.next = list1;
            break;
        }
        if (list1?.val <= list2?.val) {
            kill = new ListNode(list1?.val, null);
            list1 = list1?.next;
        } else {
            kill = new ListNode(list2?.val, null);
            list2 = list2?.next;
        }
        if (temp) {
            temp.next = kill;
            temp = temp.next;
        } else {
            mergedList = kill;
            temp = mergedList;
        }
    }
    return mergedList;
};
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

//TODO: I've removed null condition so it will never be null.
//      The number of nodes in each linked list is in the range [1, 100].
function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
    let sumLNode: ListNode, trashNode: ListNode | null, lastNode: ListNode | null;
    let modulo: number = 0, trashSum = 0;
    let isFirstFinished = false, isSecondFinished = false, isLoadedOnce = false;

    while(1) {
        if(l1 == null) isFirstFinished = true;
        if(l2 == null) isSecondFinished = true;

        if(isFirstFinished && isSecondFinished){
            if(modulo != 0) {
                trashNode = lastNode;
                trashNode.next = new ListNode(modulo, null);
            }
            break;
        }

        trashSum = (l1?.val ? l1?.val : 0) + (l2?.val ? l2?.val : 0) + modulo;
        modulo = (trashSum > 9) ? 1 : 0;
        trashSum %= 10;
        if(isLoadedOnce) {
            if(trashSum > -1) {
                trashNode = lastNode;
                trashNode.next = new ListNode(trashSum, null);
                lastNode = trashNode.next;
            }
        } else {
            sumLNode = new ListNode(trashSum, null);
            lastNode = sumLNode;
            isLoadedOnce = true;
        }

        l1 = l1?.next;
        l2 = l2?.next;
    }
    return sumLNode;
};
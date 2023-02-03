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
    if (head == null) return null;
    let temp = new ListNode(head.val);
    head = head.next;
    while (head) {
        let _node = new ListNode(head.val);
        _node.next = temp;
        temp = _node;
        head = head.next;
    }
    return temp;
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    l1 = reverseList(l1);
    l2 = reverseList(l2);
    let sumLNode: ListNode, trashNode: ListNode | null, lastNode: ListNode | null;
    let modulo: number = 0, trashSum = 0;
    let isFirstFinished = false, isSecondFinished = false, isLoadedOnce = false;

    while (1) {
        if (l1 == null) isFirstFinished = true;
        if (l2 == null) isSecondFinished = true;

        if (isFirstFinished && isSecondFinished) {
            if (modulo != 0) {
                trashNode = lastNode;
                trashNode.next = new ListNode(modulo, null);
            }
            break;
        }

        trashSum = (l1?.val ? l1?.val : 0) + (l2?.val ? l2?.val : 0) + modulo;
        modulo = (trashSum > 9) ? 1 : 0;
        trashSum %= 10;
        if (isLoadedOnce) {
            if (trashSum > -1) {
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
    return reverseList(sumLNode);
};
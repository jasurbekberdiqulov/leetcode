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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let mergedKList: ListNode = new ListNode(), min: number;
    let head = mergedKList, pos: number;
    while (lists.length) {
        if (!lists[0]) {
            lists.splice(0, 1);
            continue;
        }
        min = lists[0].val; pos = 0;

        for (let i = 0; i < lists.length; ++i) {
            if (!lists[i]) {
                lists.splice(i--, 1);
                continue;
            }
            if (min > lists[i].val) {
                pos = i;
                min = lists[i].val;
            }
        }
        lists[pos] = lists[pos]?.next;
        head.next = new ListNode(min, null);
        head = head.next;
    }
    return mergedKList.next;
};
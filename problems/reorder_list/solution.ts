/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    let node = head;
    let counter = 0;
    while (node) {
        node = node.next;
        counter++;
    }

    let middle = Math.ceil(counter / 2);
    if (!middle) return null;

    node = head;
    let prevNode: ListNode | null;
    while (middle--) {
        prevNode = node;
        node = node.next;
    }

    prevNode.next = null;
    let reversedList: ListNode = new ListNode(), headReverse = reversedList;
    let temp = node;

    while(temp) {
        prevNode = temp;
        if(!temp || !temp.next) {
            headReverse.next = temp;
            break;
        }
        temp = temp.next;
        if(temp.next == null) {
            prevNode.next = null;
            headReverse.next = temp;
            headReverse = headReverse.next;
            temp = node;
        }
    }

    temp = head;
    reversedList = reversedList.next;
    while(reversedList) {
        prevNode = temp.next;
        temp.next = reversedList;
        reversedList = reversedList.next;
        temp.next.next = prevNode;
        temp = prevNode;
    }
};
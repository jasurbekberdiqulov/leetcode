const reverse = (head: ListNode | null) => {
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
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if(head?.next == null || left == right) return head;
    let node = head;
    const k = left;
    let headNode = node;
    let prevNode: ListNode = null;
    while(node) {
        --left;
        if(!left) break;
        prevNode = node;
        node = node.next;
    }
    let temp = node;
    right -= k;
    while(temp) {
        if(right <= 0) break;
        temp = temp.next;
        --right;
    }
    if(temp) {
        let rightNode = temp.next;
        temp.next = null;
        temp = reverse(node);
        if(prevNode != null) {
            prevNode.next = temp;
            temp = headNode;
        }
        head = temp;

        while(head.next != null) {
            head = head.next;
        }
        head.next = rightNode;

        return temp;
    }
    return head;
};
function reverseList(head: ListNode | null): ListNode | null {
    if(head == null) return null;
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
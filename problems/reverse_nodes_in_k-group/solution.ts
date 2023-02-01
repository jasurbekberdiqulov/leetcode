function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let newList = new ListNode();
    let node = newList;
    while (head) {
        let temp = new ListNode(head.val);
        let lastTemp = temp;
        let n = k;
        const lastTail = head;
        head = head.next;
        while (--n) {
            if (head == null) {
                temp = lastTail;
                break;
            }
            let _node = new ListNode(head.val);
            _node.next = temp;
            temp = _node;
            head = head.next;
        }
        node.next = temp;
        node = lastTemp;
    }
    return newList.next
};
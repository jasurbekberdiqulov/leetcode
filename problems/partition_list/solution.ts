function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head || !head.next) return head;
    let node = head, s = new ListNode(), prevNode = head;
    let k = s;

    while (node) {
        if (node.val < x) {
            k.next = new ListNode(node.val);
            k = k.next;
            if (node == head) {
                head = head.next;
                node = head;
            } else {
                prevNode.next = node.next;
                node = prevNode.next;
            }
        } else {
            prevNode = node;
            node = node.next;
        }
    }

    if (s.next) {
        k.next = head;
        return s.next;
    } else {
        return head;
    }
};
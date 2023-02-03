function swapNodes(head: ListNode | null, k: number): ListNode | null {
    if (head.next == null) return head;

    let right: ListNode;
    let left = head, counter = 0;
    while (left) {
        ++counter;
        if(counter == k) right = left;
        left = left.next;
    }

    if (k << 1 == counter + 1) return head;

    left = head;
    counter -= k - 1;
    for (let i = 1; i < counter; ++i) {
        left = left.next;
    }

    [right.val, left.val] = [left.val, right.val];
    return head;
};

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    if (head.next == null) return head;

    let right: ListNode = head, prevRight: ListNode;
    let node = right, counter = 0;
    while (node) {
        ++counter;
        node = node.next;
    }
    if (k << 1 == counter + 1) return head;

    if (k == 1 || k == counter) {
        right = head;
        prevRight = null;
        while (right.next) {
            prevRight = right;
            right = right.next;
        }
        prevRight.next = null;

        let temp = head;
        head = head.next;
        temp.next = null;

        if (head) {
            prevRight.next = temp;
            right.next = head;
        } else {
            right.next = prevRight;
        }

        return right;
    }

    let l = counter - k;
    if (k > l) {
        const s = k - 1;
        k = l + 1;
        l = s;
    }

    for (let i = 1; i < k; ++i) {
        prevRight = right;
        right = right.next;
    }

    if (k << 1 == counter) {
        prevRight.next = right.next;
        const temp = right.next.next;
        right.next = null;

        prevRight.next.next = right;
        prevRight.next.next.next = temp;
        return (counter == 4) ? prevRight : head;
    }

    let left: ListNode = head, prevLeft: ListNode;
    for (let i = 0; i < l; ++i) {
        prevLeft = left;
        left = left.next;
    }

    prevRight.next = left;
    let temp = right.next;
    right.next = left.next;
    left.next = temp;
    while(temp.next != left) {
        temp = temp.next
    }
    temp.next = right;

    return (counter == 5) ? prevRight : head;
};
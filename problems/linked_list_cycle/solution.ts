function hasCycle(head: ListNode | null): boolean {
    const listMap = new Set<ListNode>();
    while(head) {
        if(listMap.has(head)) return true;
        listMap.add(head)
        head = head.next;
    }
    return false;
};
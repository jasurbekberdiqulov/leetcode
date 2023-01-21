/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* getLast(ListNode* node) {
        return node->next ? getLast(node->next) : node;
    }
public:
    ListNode* mergeInBetween(ListNode* list1, int a, int b, ListNode* list2) {
        ListNode* bridgeNodeA = list1;
        ListNode* edgeBegin;

        for(int i = 0; i <= b; ++ i) {
            if(i + 1 == a) edgeBegin = bridgeNodeA;
            bridgeNodeA = bridgeNodeA->next;
        }

        edgeBegin->next = list2;
        
        ListNode* bridgeNodeB = getLast(list2);
        bridgeNodeB->next = bridgeNodeA;

        return list1;
    }
};
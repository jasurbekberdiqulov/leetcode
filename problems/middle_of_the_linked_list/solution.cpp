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
    ListNode* middleNode(ListNode* head) {
        ListNode* node = head;
        int counter = 0;
        while(node) {
            node = node->next;
            counter ++;
        }

        counter /= 2;
        node = head;
        while(counter --) {
            node = node->next;
        }
        return node;        
    }
};
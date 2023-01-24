class Solution {
public:
    int balancedStringSplit(string s) {
        int move = 0;
        int counter = 0;
        
        for(int i = 0; i < s.length(); ++i) {
            move += (s[i] == 'L')? 1 : -1;
            if(move == 0) counter ++;
        }
        return counter;
    }
};
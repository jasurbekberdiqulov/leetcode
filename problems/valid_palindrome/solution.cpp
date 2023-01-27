class Solution {
public:
    bool isPalindrome(string s) {
        int i, j = -1;
        for(i = 0; i < s.length(); ++i) {
            if('A' <= s[i] && s[i] <= 'Z') s[i] = s[i] + 32;
            if('a' <= s[i] && s[i] <= 'z' || '0' <= s[i] && s[i] <= '9') {
                s[++j] = s[i];
            }
        }
        s = s.substr(0, j+1);
        int lenS = s.length();
        int len = lenS>>1;
        for(i = 0; i < len; ++i) {
            if(s[i] != s[lenS - i - 1]) return false;
        }
        return true;
    }
};
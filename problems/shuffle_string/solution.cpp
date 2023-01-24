class Solution {
public:
    string restoreString(string s, vector<int>& indices) {
        int len = s.length();
        string text = s; 
        for(int i = 0; i < len; i++) {
            text[indices[i]] = s[i];
        }
        return text;
    }
};
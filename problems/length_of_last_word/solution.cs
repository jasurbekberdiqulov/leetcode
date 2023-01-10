public class Solution {
    public int LengthOfLastWord(string s) {
        int len = s.Length - 1;
        int count = 1;
        bool isPosFound = false; 
        for(int i = len; i >= 0; --i) {
            if(s[i] != ' ') {
                if(isPosFound) {
                    ++ count;
                } else {
                    isPosFound = true;
                }
            } else {
                if(isPosFound) break;
                isPosFound = false;
            }
        }
        return count;
    }
}
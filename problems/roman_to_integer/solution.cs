public class Solution {
    private int getNumRomanChar(char r) {
        int res = 0;
        switch(r) {
            case 'I': res = 1; break; 
            case 'V': res = 5; break; 
            case 'X': res = 10; break; 
            case 'L': res = 50; break; 
            case 'C': res = 100; break; 
            case 'D': res = 500; break; 
            case 'M': res = 1000; break; 
            default: res = 0; break; 
        }
        return res;
    }
    public int RomanToInt(string s) {
        int sum = 0, right = 0, left = 0, len = s.Length;
        s = ' ' + s;
        for(int i = len; i >= 0; --i) {
            right = getNumRomanChar(s[i]);
            left = (i != 0)? getNumRomanChar(s[i-1]) : 0;            

            if(left < right) {
                sum += right - left;
                --i;
            } else {
                sum += right;
            }
        }
        return sum;
    }
}
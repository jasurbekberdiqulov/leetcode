class Solution {
public:
    string addBinary(string a, string b) {
        int lenA = a.length(), lenB = b.length();
        int maxLen = (lenA > lenB)? lenA : lenB;
        int ret = 0, c = 0;

        string sum = "";
        for(int i = 0; i < maxLen; ++i) {
            c += (lenA - i > 0) ? a[lenA - i - 1] - 48 : 0;
            c += (lenB - i > 0) ? b[lenB - i - 1] - 48 : 0;
            c += ret;

            if(c > 1) {
                c = c == 2 ? 0 : 1;
                ret = 1;
            } else ret = 0;
            sum.insert(sum.begin(), char(c + 48));
            c = 0;
        }
        if(ret) sum.insert(sum.begin(), '1');

        return sum;
    }
};
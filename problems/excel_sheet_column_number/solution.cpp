class Solution {
public:
    int titleToNumber(string columnTitle) {
        int len = columnTitle.length();
        int sum = 0;
        for(int i = 0; i < len - 1; ++i) {
            sum += pow(26, len - i - 1) * (columnTitle[i] - 64);
        }
        sum += (columnTitle[len - 1] - 64);
        return sum;
    }
};
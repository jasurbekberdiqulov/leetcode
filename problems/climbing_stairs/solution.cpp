class Solution {
public:
    int climbStairs(int n) {
        int i = 0, sum = 0, prev1 = 0, prev2 = 1;
        while (1) {
            if (i == n) break;
            sum = prev1 + prev2;
            prev1 = prev2;
            prev2 = sum;
            ++i;
        }
        return sum;
    }
};
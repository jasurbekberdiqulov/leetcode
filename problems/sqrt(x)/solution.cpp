class Solution {
public:
    int check(int x, int s) {
        if(x == 0) return 0;
        long long m = x / 2 + x % 2;
        return (m * m <= s)? m : check(m, s);
    }
    int mySqrt(int x) {
        int a = check(x, x);
        for(long long i = a; i < 46342; ++i) {
            if(i * i > x) return i - 1;
        }
        //But it will never come to this :))
        return 0;
    }
};